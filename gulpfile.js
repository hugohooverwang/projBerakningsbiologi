const gulp = require('gulp');

const paths = {
    orgmode: {
      src: 'src/orgmode/*.md',
        dest: 'src/content'
    }
};

function utkast() {
    return gulp.src(paths.orgmode.src)
        .pipe(gulp.dest(paths.orgmode.dest));
}

function watch() {
    gulp.watch(paths.orgmode.src, utkast);
}

const skriva = gulp.series(utkast, watch);

exports.default = skriva;
