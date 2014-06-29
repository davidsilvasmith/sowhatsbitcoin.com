var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var spellcheck = require('gulp-spellcheck');
var frep = require('gulp-frep');

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
	//http://regex101.com/ for testing
	var patterns = [
	  {
	    // Strip tags from HTML
	    pattern: /(<([^>]+)>)/ig,
	    replacement: ''
	  }];
	var spellSuggestions = [
	{
	    pattern:  / [^ ]+? \(suggestions:[A-z, ']+\)/g,
	    replacement: function(match) {
      return '<<<' + match + '>>>';
    }
	  }];

	var nonSuggestions = [
	{
	    pattern:  /<<<.+>>>|([^\s]+[^<]+)/g,
	    replacement: function(match) {
      		if (match.indexOf('<')==0) {
      			return '\n' + match +'\n'; 
      		} 
      		return '';
    	}
	  }];
    var a = gulp.src('./_site/**/*.html')
    	.pipe(frep(patterns))
        .pipe(spellcheck())
        //.pipe(replace({regex:' [^ ]+? \(suggestions:.+\)|([^\s]+)', replace:'DeLorean'}))
        .pipe(frep(spellSuggestions))
        .pipe(frep(nonSuggestions))
        ;	
    
    var util = require('util')
 	var outMe = util.inspect(a)
    
    a.on('data', function(chunk) {
    	var contents = chunk.contents.toString().trim(); 
    	if (contents.length > 1) {
	    	process.stdout.write(chunk.path + '\n' + contents + '\n');
	    	process.stdout.write(chunk.path + '\n\n' + '_______________________________________' + '\n');
    	}
	});
});

gulp.task('lessWithClean', function () {
  gulp.src('./css/sowhatsbitcoin.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ], compress: true
    }))
    .pipe(gulp.dest('./css'));
});


