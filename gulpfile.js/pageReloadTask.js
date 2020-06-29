const {series, watch} = require('gulp');

const bs = require('browser-sync');
const sassTask = require('../gulpfile.js/sassCompileTask');
const pugTask = require('../gulpfile.js/pugCompileTask');

const home = './build';
const sass = 'src/sass/**/*.sass';
const pug = 'src/pages/**/*.pug';

const css = 'build/assets/styles/*.css';
const html = 'build/*.html';

function _serverStart(){
    bs.init({
        server: {
            baseDir: home
        }
    });

    watch(sass).on('change', sassTask.sassCompileTask);
    watch(pug).on('change', pugTask.pugCompileTask);

    watch(css).on('change', bs.reload);
    watch(html).on('change', bs.reload);
}

const pageReloadTask = series(_serverStart);
exports.pageReloadTask = pageReloadTask;