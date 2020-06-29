const { series, dest, src } = require('gulp');

const plumber = require('../node_modules/gulp-plumber');
const pug = require('../node_modules/gulp-pug');
const pugLinter = require('../node_modules/gulp-pug-linter');
const htmlValidator = require('../node_modules/gulp-w3c-html-validator');
const bemValidator = require('../node_modules/gulp-html-bem-validator');

const pugSrc = 'src/pages/*.pug';
const compiledDest = 'build';

function _compilePugToHtml(){
  return src(pugSrc)
  	.pipe(plumber())
  	.pipe(pugLinter({
  		reporter: 'default'
  	}))
  	.pipe(pug({
  		pretty: true
  	}))
  	.pipe(htmlValidator())
  	.pipe(bemValidator())
    .pipe(dest(compiledDest));
}

const pugCompileTask = series(_compilePugToHtml);
exports.pugCompileTask = pugCompileTask;