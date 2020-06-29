const { task, series } = require( 'gulp' );

const pug = require("./pugCompileTask");
const sass = require("./sassCompileTask");
const sync = require("./pageReloadTask");

task('pug', series(pug.pugCompileTask));
task('sass', series(sass.sassCompileTask));
task('sync', series(sync.pageReloadTask));
task('default', series(sync.pageReloadTask, pug.pugCompileTask, sass.sassCompileTask))