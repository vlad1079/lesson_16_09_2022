const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function css_style (done) {
  gulp.src('./scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(rename('main.css'))
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.stream());

  done();
}

function watchFiles () {
  gulp.watch('./scss/**/*', css_style);
  gulp.watch('./**/*.html', browserReload);
  gulp.watch('./**/*.js', browserReload);
}



function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  })
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

gulp.task('default' , gulp.parallel(sync, watchFiles));
gulp.task(sync);
