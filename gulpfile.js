var browserify = require('browserify');
var source = require('vinyl-source-stream'); //vinyl-source-stream is used for putting the browserified source code into a new file
var concat = require('gulp-concat'); //create a script by contatinating existing script files into a single file the bowser can read faster
var uglify = require('gulp-uglify'); // remove all unnecessary characters in JS files to optimize JavaScript execution
var utilities = require('gulp-util');
var del = require('del');
var gulp = require('gulp');

gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./build/js"));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

var buildProduction = utilities.env.production;

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
