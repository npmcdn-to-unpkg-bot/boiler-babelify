var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

const site_name = 'website';

function compile(watch) {
    var bundler = watchify(browserify('./' + site_name + '/scripts/app.js', {
        debug: true
    }).transform(babel.configure({
        // Use all of the ES2015 spec
        presets: ["es2015"]
    })));

    function rebundle() {
        bundler.bundle()
            .on('error', function (err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source(site_name + '.build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./' + site_name + '/scripts'));
        
    }

    if (watch) {
        bundler.on('update', function () {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task('build', function () {
    return compile();
});
gulp.task('watch', function () {
    return watch();
});

gulp.task('default', ['watch']);