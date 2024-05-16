var gulp = require('gulp');
var concat = require('gulp-concat');
const minify = require('gulp-minify');
// var uglify = require('gulp-uglify');
// var minifyhtml = require('gulp-minify-html');
var package = require('./package');

var src = '';
var dist = 'dist/';
var PreFileName = '_L.Meta.Entity';

// Web 의 경우 로딩 순서 관련 있음
var paths = {
	js: [
        // 폴리심 + 확장
        'src/i-control-export.js', 
        'src/i-control-group.js', 

    ],
    test: 'test/*.test.js',
    // task: ['task/Collection.ArrayCollection.task.js', 'task/Main.task.js'],     // 임시 테스트
    scss: src + '/scss/*.scss',
	html: src + '/**/*.html'
};

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

gulp.task('meta', function () {
	return gulp.src(paths.js)
		.pipe(concat(PreFileName +'-'+ package.version + '.js'))
		.pipe(gulp.dest(dist));
});

gulp.task('min', function () {
	return gulp.src(paths.js)
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