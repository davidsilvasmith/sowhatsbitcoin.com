var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var spellcheck = require('gulp-spellcheck');

gulp.task('default', function() {
	var watcher = gulp.watch('./css/**/*.less', ['less']);
});


gulp.task('less', function () {
  gulp.src('./css/sowhatsbitcoin.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('crush', function () {
    return gulp.src('./images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()],
            optimizationLevel: 7
        }))
        .pipe(gulp.dest('./images'));
});

gulp.task('spellcheck', function () {
    gulp.src('./_site/**/*.html')
        .pipe(spellcheck())
        .pipe(gulp.dest('./spellchecked/'));
});

gulp.task('lessWithClean', function () {
  gulp.src('./css/sowhatsbitcoin.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      options: ['--clean-css']   
    }))
    .pipe(gulp.dest('./css'));
});


