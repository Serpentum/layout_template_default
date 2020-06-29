const { series, dest, src } = require('gulp');

//require plugins
const sass = require('../node_modules/gulp-sass');
const autoprefix = require('../node_modules/gulp-autoprefixer');
const cssClear = require('../node_modules/gulp-clean-css');

//source file address
const sassSrc = './src/sass/**/*.sass';
const compiledDest = './build/assets/styles/';

//handler
function _compileSassToCss(){
  return src(sassSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix({
    	overrideBrowserslist: ['last 4 versions']
    }))
    .pipe(cssClear({
      format: 'beautify'
    }))
    .pipe(dest(compiledDest));
}

const sassCompileTask = series(_compileSassToCss);
exports.sassCompileTask = sassCompileTask;