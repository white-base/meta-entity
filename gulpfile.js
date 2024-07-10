var gulp = require('gulp');
var concat = require('gulp-concat');
const minify = require('gulp-minify');
// var uglify = require('gulp-uglify');
// var minifyhtml = require('gulp-minify-html');
const stripLine  = require('gulp-strip-line');                  // 줄 제거
const replace = require('gulp-string-replace');                 // 교체
const removeEmptyLines = require('gulp-remove-empty-lines');    // 빈줄 제거
const strip = require('gulp-strip-comments')                    // == decomment, 주석제거

var package = require('./package');
var gulpCore = require('logic-core/gulpfile').paths;

var src = '';
var dist = 'dist/';
var PreFileName = '_L.Meta.Entity';

// Web 의 경우 로딩 순서 관련 있음
var paths = {
	js: [
        // 폴리심 + 확장
        'src/message-code.js', 
        'src/message-wrap.js', 
        'src/i-control-export.js', 
        'src/i-control-group.js', 
        'src/i-control-import.js', 
        'src/i-control-schema.js', 
        'src/i-transaction.js', 
        'src/trans-queue.js', 
        'src/collection-transaction.js', 
        'src/meta-row.js', 
        'src/base-column.js', 
        'src/meta-column.js', 
        'src/object-column.js', 
        'src/collection-column.js', 
        'src/base-entity.js', 
        'src/meta-table.js', 
        'src/meta-view.js', 
        'src/meta-set.js', 
    ],
    test: 'test/*.test.js',
    // task: ['task/Collection.ArrayCollection.task.js', 'task/Main.task.js'],     // 임시 테스트
    scss: src + '/scss/*.scss',
	html: src + '/**/*.html'
};

var fileList = [];
var replaceOpt = { 
    logs: {
        enabled: false
    }
};


gulpCore.js.forEach((val, idx, arr) => {
    fileList.push('node_modules/logic-core/'+ val);
});
fileList = fileList.concat(paths.js);
/**
 * << 출판 파일 관리 정책 >>
 * 
 *  - _W.Meta.Entity.*      | 'meta-entity'         | "_w-meta-entity-0.0.0.js"     | [공통]
 *  - _W.Meta.Bind.*        | 'meta-bind'           | "_w-meta-bind-0.0.0.js"       | [공통] + Entity
 *  - _W.Meta.Procedure.*   | 'meta-procedure'      | "_w-meta-bind-0.0.0.js"       | [공통] + Entity
 *  - _W.Meta.Data.*        | 'meta-data'           | "_w-meta-data-0.0.0.js"       | [공통] + Entity
 *  - _W.Meta.Adapter.*     | 'meta-adapter'        | "_w-meta-adapter-0.0.0.js"    | [공통] + Entity
 *  - _W.Meta.*             | 'meta'                | "_w-meta.0.0.0.js"            | [공통] + [전체] Meta
 *  - _W.Template.*         | 'template'            | "_w-template-0.0.0.js"        | [공통] + Meta
 *  - _W.Auto.*             | 'auto'                | "_w-auto-0.0.0.js"            | [공통] + Meta + Template + Auto
 *  - _W.Test.Meta.*        | 'meta-test'           | "_w-meta-0.0.0.test.js"       | Meta 테스크
 *  - _W.Test.Template.*    | 'template-test'       | "_w-template-0.0.0.test.js"   | Template 테스크
 *  - _W.Test.Auto.*        | 'auto-test'           | "_w-auto-0.0.0.test.js"       | Auto 테스크
 *  - _W.Test.*             | 'test'                | "_w-0.0.0.test.js"            | [전체] 테스크
 */

// gulp.task('meta', function () {
// 	return gulp.src(fileList)
// 		.pipe(concat(PreFileName +'-'+ package.version + '.js'))
// 		.pipe(gulp.dest(dist));
// });
gulp.task('meta', function () {
	return gulp.src(fileList)
		.pipe(concat(PreFileName +'-'+ package.version + '.js'))
        .pipe(stripLine([/strip:/]))     // 라인 제거
        .pipe(replace(/(var \$)(.*)(\/\/ modify:)/g, (all, p1, p2, p3)=> {
            return 'var ' + p2;
        }, replaceOpt))
        .pipe(removeEmptyLines({
            removeComments: true
          }))
		.pipe(gulp.dest(dist));
});


gulp.task('min', function () {
	return gulp.src(fileList)
		.pipe(concat(PreFileName +'-'+ package.version + '.js'))
		.pipe(minify())
		.pipe(gulp.dest(dist));
});

// gulp.task('meta-zip', function () {
//     return gulp.src(paths.js)
//         .pipe(uglify())
// 		.pipe(concat('_w-meta-' + package.version + '.zip.js'))
// 		.pipe(gulp.dest(dist));
// });

// gulp.task('meta-min', function () {
//     return gulp.src(paths.js)
//         .pipe(minifyhtml())
// 		.pipe(concat('_w-meta-' + package.version + '.min.js'))
// 		.pipe(gulp.dest(dist));
// });

gulp.task('meta-test', function () {
	return gulp.src(paths.test)
		.pipe(concat(PreFileName +'-'+ package.version + '.test.js'))
		.pipe(gulp.dest(dist));
});

exports.paths = paths;
// gulp.task('default', gulp.series['auto']);
// exports.default = 'combine-js';
// exports.default = 'meta';