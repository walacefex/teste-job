const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
sass.compiler = require("node-sass");

 gulp.task('default', watch);
 gulp.task('sass', compilaSass);


function compilaSass() {
  return gulp.src("./src/assets/scss/**/*.scss")
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest("./src/assets/css/"))
}

function watch(){
  gulp.watch("./src/assets/scss/**/*.scss", compilaSass);
}