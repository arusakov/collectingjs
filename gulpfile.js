var gulp = require('gulp');
var gjshint = require('gulp-jshint');
var gconcat = require('gulp-concat');
var guglify = require('gulp-uglify');
var gsourcemaps = require('gulp-sourcemaps');
var KarmaServer = require('karma').Server;
var del = require('del');

var paths = require('./paths');

// build for production
gulp.task('default', ['jshint', 'build_karma', 'dist']);

gulp.task('dev', function () {
  return gulp.watch(paths.PATH_SRC + '/**/*.js', ['build']);
});

gulp.task('clear', function (cb) {
  del([
    paths.PATH_BUILD
  ], cb);
});

gulp.task('karma', karmaTask);
gulp.task('build_karma', ['build'], karmaTask);

function karmaTask(callback) {
  new KarmaServer({
    configFile: paths.PATH_PROJECT_ROOT + '/karma.conf.js'
  }, callback).start();
}

gulp.task('build', ['clear'], function () {
  return gulp
    .src(paths.SRC)
    .pipe(gsourcemaps.init())
    .pipe(gconcat('collecting.min.js'))
    .pipe(guglify())
    .pipe(gsourcemaps.write()) // inline source maps
    .pipe(gulp.dest(paths.PATH_BUILD));
});

gulp.task('dist', function () {
  // like build, but without sourcemaps
  return gulp
    .src(paths.SRC)
    .pipe(gconcat('collecting.min.js'))
    .pipe(guglify())
    .pipe(gulp.dest(paths.PATH_DIST));
});

gulp.task('jshint', function () {
  return gulp
    .src(paths.SRC)
    .pipe(gjshint())
    .pipe(gjshint.reporter('default'))
    .pipe(gjshint.reporter('fail'));
});
