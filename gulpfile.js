var browserify = require('browserify'),
  watchify = require('watchify'),
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  source = require('vinyl-source-stream');

//**************** Server ***************************
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

//**************** Build/Watch SASS *****************************
function buildSass() {
  return gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(reload({stream: true}));
}

gulp.task('build:sass', buildSass);
gulp.task('watch:sass', function () {
  buildSass();
  gulp.watch('scss/**/*.scss', buildSass);
});

// //**************** Build/Watch JS *******************************
//browserify bundler is wrapped in watchify so that it can do fast rebuilds from cache
var buildBundler = watchify(browserify('./js/app.js', {
  // Required watchify args
  cache: {},
  packageCache: {},
  fullPaths: true
}));


function buildJS() {
  return buildBundler
    .bundle()
    .on('error', function (err) {
      console.log(err.message);
      // this.end();
    })
    .pipe(source('build.js'))
    .pipe(gulp.dest('./js'))
    .pipe(reload({stream: true}));
}
gulp.task('build:js', buildJS);
gulp.task('watch:js', function () {
  buildJS();
  buildBundler.on('update', function () {
    console.log('Rebuilding JS (from cache)');
    buildJS();
  })
});

// //**************** HTML *****************************
gulp.task('watch:html', function () {
  gulp.watch('./index.html', function () {
    reload({stream: true});
  });
});

//**************** Main Dev Tasks ***********************
gulp.task('default', ['browser-sync', 'watch:sass', 'watch:js', 'watch:html']);
