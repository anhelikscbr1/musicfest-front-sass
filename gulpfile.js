const { src, dest, watch, parallel} = require("gulp"); //? 

//? CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

//? images
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const avif = require("gulp-avif");

function css(done){
    //* Identify sass file

    //* Compile sass file

    //* save css file

    src("src/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));

    done(); //? Callback for gulp to know that the functione is over, the name is arbitrary
}

function webpver(done){
    const opc = {
        quality: 50
    }
    src('src/img/**/*.{jpg,png}')
        .pipe(webp(opc))
        .pipe(dest('build/img'));

    done();
}

function avifver(done){
    const opc = {
        quality: 50
    }
    src('src/img/**/*.{jpg,png}')
        .pipe(avif(opc))
        .pipe(dest('build/img'));

    done();
}

function minimages(done){

    const opc = {
        optimizationLevel: 3
    }

    src('src/img/**/*.{jpg,png}')
        .pipe(cache(imagemin(opc)))
        .pipe(dest('build/img'));
    done();
}

function javascript(done){
    src('src/js/**/*.js')
        .pipe(dest('build/js'));
    done();
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);
    done();
}

exports.css = css;
exports.javascript = javascript;

exports.dev = parallel(dev, javascript);

exports.webpver = webpver;
exports.avifver = avifver;
exports.minimages =  parallel (minimages, webpver, avifver);
