const { src, dest, watch } = require("gulp"); //? 
const sass = require("gulp-sass")(require("sass"));

function css(done){
    //* Identify sass file

    //* Compile sass file

    //* save css file

    src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(dest("build/css"));

    done(); //?Callback for gulp to know that the functione is over, the name is arbitrary
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    done();
}

exports.css = css;
exports.dev = dev;