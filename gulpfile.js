var browserify = require('browserify');
var source = require('vinyl-source-stream'); //vinyl-source-stream is used for putting the browserified source code into a new file
var gulp = require('gulp');

gulp.task('myTask', function(){
  console.log('hello gulp');
});


gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
