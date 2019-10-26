var gulp             = require('gulp'),
    concat           = require('gulp-concat'),
    prefix           = require('gulp-autoprefixer'),
    sass             = require('gulp-sass'),
    pug              = require('gulp-pug'),
    livereload       = require('gulp-livereload'),
    sourcemaps       = require('gulp-sourcemaps'),
    uglify           = require('gulp-uglify'),
    notify           = require('gulp-notify'),
    imagemin         = require('gulp-imagemin'),
    minify           = require('gulp-clean-css'),
    webpackMinConfig = require('./bundle.webpack.mix.js'),
    webpackDevConfig = require('./development.webpack.config.js'),
    webpack          = require('webpack-stream');

//my 14th task
gulp.task('vue-task', function() {
    return gulp
        .src(['script/vue.config.js'])
        .pipe(webpack(webpackDevConfig))
        .pipe(gulp.dest('script/bundled files'))
        .pipe(notify("Vue task is done!"))
    });
//my 14th task
gulp.task('bundle', function() {
    return gulp
        .src(['script/main.js', 'script/javascript/theme.js'])
        .pipe(webpack(webpackMinConfig))
        .pipe(gulp.dest('script/bundled files'))
        .pipe(notify("JS-bundle task is done!"))
});
//my 13th task
gulp.task('img-compression', function() {
    return gulp
        .src('img/**/*')
        .pipe(imagemin({
             interlaced: true,
             progressive: true,
             optimizationLevel: 5,
             svgoPlugins: [{removeViewBox: true}]
                      })
             )
        .pipe(gulp.dest('dist/images'))
        .pipe(notify("Image compression task is done!"));
});
//my 5th task
gulp.task('create-polyfill-file', function() {
    return gulp
        .src(['style/*.*css', '!style/bootstrap- v3.3.7.css', '!style/main.scss'])
        .pipe(concat('polyfills.css'))
        .pipe(minify({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("polyfill task is done!"))
        .pipe(livereload());

});
//my 6th task
gulp.task('font-copy', function() {
   
    // require('./server.js');
    return gulp
        .src('style/fonts/*.*') //extension = js/css/pug
        .pipe(gulp.dest('dist/fonts'))
        .pipe(notify("font-copy task is done!"));
});
//my 6th task
gulp.task('css-copy', function() {
   
    // require('./server.js');
    return gulp
        .src(['style/bootstrap- v3.3.7.css']) //extension = js/css/pug
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("css-copy task is done!"));
});
//my 6th task
gulp.task('js-copy', function() {
   
    // require('./server.js');
    return gulp
        .src(['script/javascript/*.js','!script/javascript/theme.js','!script/javascript/map.js']) //extension = js/css/pug
        .pipe(gulp.dest('dist/js'))
        .pipe(notify("js-copy task is done!"));
});
//*********my 7th task
gulp.task('sasstocss', function() {

    //require('./server.js');
    return gulp
        .src(['style/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.css'))
        .pipe(sass({outputStyle: 'compressed' }).on('error', sass.logError)) //
        .pipe(prefix('last 2 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css')) //destribution
        .pipe(notify("SASS task is done!"))
        .pipe(livereload());
});
//*********my 8th task
gulp.task('pugtohtml', function() {

    //require('./server.js');
    return gulp
        .src('pug js/*.pug')
        .pipe(pug({pretty: true})) //{pretty:true}: for pretty code
        .pipe(gulp.dest('dist'))
        .pipe(notify("HTML task is done!"))
        .pipe(livereload());
});
//**********my 9th task
gulp.task('jsminify', function() {

    //require('./server.js');
    return gulp
        .src(['script/bundled files/bundle.js'])
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')) //destribution
        .pipe(notify("JS minify is done !"))
        .pipe(livereload());
});
//my 10th task
gulp.task('watch', function() {
    require('./server.js')
    livereload.listen()
    gulp.watch('script/**/*.*', gulp.series('vue-task'))
    gulp.watch('script/**/*.*', gulp.series('bundle'))
    gulp.watch('script/**/*.*', gulp.series('jsminify'))
    gulp.watch('pug js/**/*.pug', gulp.series('pugtohtml'))
    gulp.watch(['style/main.scss', 'style/bootstrap-rtl.css'], gulp.series('create-polyfill-file')) // not used yet
    gulp.watch('style/main.scss', gulp.series('css-copy'))
    gulp.watch('style/main.scss', gulp.series('font-copy'))
    gulp.watch('script/**/*.js', gulp.series('js-copy'))
    gulp.watch('img/**/*', gulp.series('img-compression'))
    gulp.watch('style/main.scss', gulp.series('sasstocss'));
});
//Default task
gulp.task('default', gulp.parallel('watch')); //gulp.series was here!