import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import autoExternal from 'rollup-plugin-auto-external';
import bundleSize from 'rollup-plugin-bundle-size';
import aliasPlugin from '@rollup/plugin-alias';
import { cleandir } from 'rollup-plugin-cleandir';
import path from 'path';
import copy from 'rollup-plugin-copy';

import mergeLocalesPlugin from './rollup-mergePlugin';

const lib = require("./package.json");
const outputFileName = 'logic-entity';
const name = "_L";
const namedInput = './index.js';
const defaultInput = './index.js';
const srcMap = true;
const OUT_DIR = './dist';

const buildConfig = ({es5, browser = true, minifiedVersion = true, alias, ...config}) => {
  const {file} = config.output;
  const ext = path.extname(file);
  const basename = path.basename(file, ext);
  const extArr = ext.split('.');
  extArr.shift();


  const build = ({minified}) => ({
    input: namedInput,
    ...config,
    output: {
      ...config.output,
      file: `${path.dirname(file)}/${basename}.${(minified ? ['min', ...extArr] : extArr).join('.')}`
    },
    plugins: [
      aliasPlugin({
        entries: alias || []
      }),
      json(),
      resolve({browser}),
      commonjs(),

      minified && terser(),
      minified && bundleSize(),
      ...(es5 ? [babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env']
      })] : []),
      ...(config.plugins || []),
    ]
  });

  const configs = [
    build({minified: false}),
  ];

  if (minifiedVersion) {
    configs.push(build({minified: true}))
  }

  return configs;
};

export default async () => {
  const year = new Date().getFullYear();
  const banner = `/*! Logic Core v${lib.version} Copyright (c) ${year} ${lib.author} and contributors */`;

  return [
    // Node.js commonjs bundle
    {
      input: defaultInput,
      output: [
        {
          file: `dist/${outputFileName}.node.cjs`,
          format: "cjs",
          sourcemap: srcMap,
          // preferConst: true,
          exports: "named",
          banner
        },
      ],
      plugins: [
        // autoExternal(),
        resolve(),
        commonjs(),
        json(),
        // copy({
        //   targets: [
        //     { src: 'src/locales/**/*', dest: 'dist/locales' }
        //   ]
        // })
        cleandir(OUT_DIR),
        mergeLocalesPlugin('node_modules/logic-core/dist/locales'),
      ]
    },
    // Browser UMD bundle for CDN
    ...buildConfig({
      input: defaultInput,
      es5: true,
      minifiedVersion: true,
      output: {
        file: `dist/${outputFileName}.js`,
        name,
        format: "umd",
        sourcemap: srcMap,
        exports: "named",
        banner
      }
    }),
    // browser ESM bundle for CDN
    ...buildConfig({
      input: namedInput,
      minifiedVersion: true,
      output: {
        file: `dist/${outputFileName}.esm.js`,
        format: "esm",
        // preferConst: true,
        sourcemap: srcMap,
        exports: "named",
        banner
      }
    }),
    // Browser CJS bundle
    ...buildConfig({
      input: defaultInput,
      es5: false,
      minifiedVersion: false,
      output: {
        file: `dist/${outputFileName}.browser.cjs`,
        name,
        sourcemap: srcMap,
        format: "cjs",
        exports: "named",
        banner
      }
    }),
    
  ]
};