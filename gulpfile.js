const { src, dest, parallel } = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const pug = require("gulp-pug");
const minifyCss = require("gulp-csso");
const del = require("del");

html = (done) => {
    src("dev/views/*.pug")
        .pipe(pug())
        .pipe(dest("dist/views/"));
    done();
}

css = (done) => {
    src("dev/public/css/*.scss")
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(dest("dist/public/css"));
    done();
}

clearDistDir = (done) => {
    del("dist");
    done();
}

exports.css = css;
exports.html = html;
exports.clearDistDir = clearDistDir;
exports.build = parallel(css, html);
