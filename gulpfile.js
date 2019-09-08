const gulp = require('gulp');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const pipeline = require('readable-stream').pipeline;
const htmlmin = require('gulp-htmlmin');
const smushit = require('gulp-smushit');
const uglifycss = require('gulp-uglifycss');
const connect = require('gulp-connect');
const watch = require('gulp-watch');
const path = require('path');

function copyHtml() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/'))
}

function copyJs() {
    return pipeline(
        gulp.src('./src/js/*.js'),
        uglify(),
        gulp.dest('./dist/js/')
    )
}

function copyStyles() {
    return gulp.src('./src/styles/*.{less, css}')
        .pipe(less({
            paths: [path.join(__dirname), 'less', 'includes']
        }))
        .pipe(uglifycss())
        .pipe(gulp.dest('./dist/styles/'))
}

function copyImage() {
    return gulp.src('./src/images/*.{jpg,png}')
        .pipe(smushit({
            verbose: true
        }))
        .pipe(gulp.dest('./dist/images/'))
}

function copyVideoAudio() {
    return gulp.src('./src/images/*.{mp4, mp3, gif}')
        .pipe(gulp.dest('./dist/images/'))
}

function copyPlugin() {
    return gulp.src('./src/plugin/**')
        .pipe(gulp.dest('./dist/plugin/'))
}


gulp.task('build', function(done) {
    copyHtml();
    copyJs();
    copyStyles();
    copyImage();
    copyVideoAudio();
    copyPlugin();
    done()
})



gulp.task('jwserver', function(done) {
    connect.server({
        name: 'jw',
        root: './src/',
        port: 4500,
        host: '192.168.199.126',
        livereload: true
    })
    done()
})

gulp.task('devHTML', function(done) {
    return watch('./src/*.html')
        .pipe(connect.reload())
    done()
});

gulp.task('devSTYLES', function(done) {
    return watch('./src/styles/*.less')
        .pipe(less({
            paths: [path.join(__dirname), 'less', 'includes']
        }))
        .pipe(uglifycss())
        .pipe(gulp.dest('./src/styles'))
        .pipe(connect.reload())
    done()
});

gulp.task('devJS', function(done) {
    return watch('./src/js/*.js')
        .pipe(connect.reload())
    done()
});

gulp.task('devIMAGES', function(done) {
    return watch('./src/images/*.{jpg,png,mp4,mp3,gif}')
        .pipe(connect.reload())
    done()
});

gulp.task('devPLUGIN', function(done) {
    return watch('./src/plugin/**')
        .pipe(connect.reload())
    done()
})

// gulp -v的版本是4.x的话，就要用这种方式
gulp.task('watching', async() => {
    gulp.watch("./src/*.html", gulp.series('devHTML'));

    gulp.watch("./src/styles/*.less", gulp.series('devSTYLES'));

    gulp.watch("./src/js/*.js", gulp.series('devJS'));

    gulp.watch("./src/images/*.{jpg,png}", gulp.series('devIMAGES'))

    gulp.watch("./src/plugin/**", gulp.series('devPLUGIN'))

})


gulp.task('dev', gulp.series('watching', 'jwserver'));