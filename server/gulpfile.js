"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var watch = require('gulp-watch');
var gulp = require("gulp");
var es2015Preset = require('babel-preset-es2015');
var source = require('vinyl-source-stream');


gulp.task('watch.transpile', function() {
  	watch("../js/*.es6", function() {
	    gulp.start("transpile-b" );
	});
});

var handleError = function(e){
	console.log('error', e);
	this.emit('end');
};


var fs = require("fs");

gulp.task("transpile-b", function () {
    browserify("../js/index.es6")
      .transform("babelify", {presets: [es2015Preset]})
      .bundle()
      .on('error', handleError)
      .pipe(source('bundle.js'))
      //.pipe(fs.createWriteStream("../build/bundle.js"));
      .pipe(gulp.dest('../build/'));
});


gulp.task("transpile", function () {
  return gulp.src("../js/index.es6")
   .pipe(sourcemaps.init())
        .pipe(babel()).on('error', handleError)
/*	    .pipe(rename(function (path) {
	        path.extname = path.extname.replace('.es6', '.js');
        })) */
         .pipe(browserify({
           insertGlobals : true,
           debug : !gulp.env.production
         }))
         .pipe(gulp.dest('../build/'))
//	    .pipe(sourcemaps.write("."))
//    	.pipe(gulp.dest("../build/"));
});
