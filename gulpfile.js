let gulp = require('gulp'),
    sass = require('gulp-sass'),
    css = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pug = require("gulp-pug"),
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-cssmin');

gulp.task('pug', function() {
    return gulp.src('app/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('font', function() {
    return gulp.src('app/fonts/**/*.*')
        // .pipe(imagemin())
        .pipe(gulp.dest('dist/fonts'));
    //.pipe(reload({stream:true}));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
    //.pipe(reload({stream:true}));
});

gulp.task('css', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(css())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions']
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions']
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('style', function() {
    return gulp.src([
            'node_modules/normalize.css/normalize.css',
            'node_modules/slick-carousel/slick/slick.css',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
            'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
            'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
            'node_modules/animate.css/animate.css'
        ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('script', function() {
    return gulp.src([
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
            'node_modules/mixitup/dist/mixitup.js',
            'node_modules/rateyo/src/jquery.rateyo.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            'node_modules/jquery-form-styler/dist/jquery.formstyler.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('html', function() {
    return gulp.src('dist/*.html')
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('javascript', function() {
    return gulp.src('app/ js/*.js')
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/scss/**/*.scss', gulp.parallel('css'));
    gulp.watch('app/**/*.pug', gulp.parallel('pug'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));
    gulp.watch('app/images/**/*.*', gulp.parallel('images'));
    gulp.watch('app/fonts/**/*.*', gulp.parallel('font'));
});

gulp.task('default', gulp.parallel('style', 'pug', 'js', 'script', 'sass', 'browser-sync', 'watch', 'images', 'css', 'html', 'font'));