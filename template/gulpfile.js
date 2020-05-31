/////////////**********task runner : GULP js******************////////////////

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







/////////////**********HTML tasks******************////////////////
                 //my 8th task---------------*|*|*|work|*|*|*-------------
gulp.task('Pug-HTML', function() {

    //require('./server.js');
    return gulp
        .src('pug js/*.pug')
        .pipe(pug({pretty: true})) //{pretty:true}: for pretty code
        .pipe(gulp.dest('dist'))
        .pipe(notify("The task of compiling Pug files to HTML files complete."))
        .pipe(livereload());
});







/////////////**********Picture tasks******************////////////////
                 //my 13th task--------------*|*|*|work|*|*|*-------------
gulp.task('img-compress&transfert', function() {
    return gulp
        .src('img/**/*.*')
        .pipe(imagemin({
             interlaced: true,
             progressive: true,
             optimizationLevel: 5,
             svgoPlugins: [{removeViewBox: true}]
                      })
             )
        .pipe(gulp.dest('dist/pictures'))
        .pipe(notify("the task of compressing images complete."))
        .pipe(livereload());
});







/////////////**********CSS tasks******************////////////////
                 //my 5th task---------------*|*|*|work|*|*|*-------------
gulp.task('compact-file', function() {
    return gulp
        .src(['style/*.*css', '!style/bootstrap- v3.3.7.css', '!style/main.scss'])
        .pipe(concat('compactFile.min.css'))
        .pipe(minify({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("The task of combining CSS files into one file complete."))
        .pipe(livereload());
});
                 //my 6th task---------------*|*|*|work|*|*|*-------------
gulp.task('transfert-CSS-file', function() {
   
    // require('./server.js');
    return gulp
        .src(['style/bootstrap- v3.3.7.css']) //extension = js/css/pug
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("The task of transferring CSS file complete.")); 
});
                 //my 7th task---------------*|*|*|work|*|*|*-------------
gulp.task('SCSS-CSS', function() {

    //require('./server.js');
        return gulp
        .src(['style/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.css'))
        .pipe(sass({outputStyle: 'compressed' }).on('error', sass.logError)) //
        .pipe(prefix('last 2 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css')) //destribution
        .pipe(notify("The task of compiling SCSS files to CSS complete."))
        .pipe(livereload());
});







/////////////**********JavaScript tasks******************////////////////

                 //my 6th task---------------*|*|*|work|*|*|*-------------
gulp.task('transfert-JS-files', function() {  
    // require('./server.js');
    return gulp
        .src(['script/javascript/*.js','!script/javascript/theme.js','!script/javascript/map.js']) //extension = js/css/pug
        .pipe(gulp.dest('dist/js'))
        .pipe(notify("The task of transferring JavaScript files complete."))
});

                 //my 9th task//**** 3 ****--*|*|*|work|*|*|*-------------
gulp.task('minify-JS-file', function() {
    //require('./server.js');
    return gulp
        .src(['script/bundled files/bundle.js'])
        .pipe(concat('bundle.min.js'))//give the file a new name
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')) //destribution
        .pipe(notify("the task of minifying JavaScript file complete."))
        .pipe(livereload());
});

                 //my 14th task//**** 2 ****---*|*|*|work|*|*|*-------------
gulp.task('bundle-JS-files', function() {
    return gulp
        .src(['script/main.js', 'script/javascript/theme.js'])
        .pipe(webpack(webpackMinConfig))
        .pipe(gulp.dest('script/bundled files'))
        .pipe(notify("the task of bundling JavaScript files complete."));
});

 /////Vue js tasks/////

                 //my 15th task//**** 1 ****---*|*|*|work|*|*|*-------------
gulp.task('Vue-task', function() {
    return gulp
        .src(['script/vue.config.js'])
        .pipe(webpack(webpackDevConfig))
        .pipe(gulp.dest('script/bundled files'))
        .pipe(notify("The task of Vue.js complete."))
        .pipe(livereload());
});






/////////////**********Font tasks******************////////////////
                 //my 6th task---------------  *|*|*|work|*|*|*-------------
gulp.task('transfert-fonts', function() {
   
    // require('./server.js');
    return gulp
        .src('style/fonts/**/*.*') //extension = js/css/pug
        .pipe(gulp.dest('dist/fonts'))
        .pipe(notify("The task of transferring fonts complete."));
});








//gulp.watch(watch file, task)
//Allows watching globs and running a task when a change occurs in the watch file. 
//you can running all tasks with one file in one change.
//my 10th task
gulp.task('watch', function() {

    require('./server.js')
    livereload.listen()
// don't put 'Vue-task' and 'bundle-JS-files' in one task,
// because you ran webpack twice Each instance only supports a single concurrent compilation at a time.
//example
/*
    gulp.watch('script/*.*', gulp.series('Vue-task'))
             get a
             return x
    gulp.watch('script/*.*', gulp.series('bundle-JS-files'))
             get x + v + n
             return z    
    gulp.watch('script/*.*', gulp.series('minify-JS-file'))
             get z
             return f
but if use gulp.parallel
    gulp.watch('script/*.*', gulp.series('Vue-task', 'minify-JS-file', 'bundle-JS-files'))
    1-get x + v + n : x not existe
    2-get z : z not existe
    3-get a : a existe
failed with 66.666666%
*/
    gulp.watch('script/**/*.*', gulp.series('Vue-task'))

    gulp.watch('script/**/*.*', gulp.series('bundle-JS-files'))
    
    gulp.watch('script/**/*.*', gulp.series('minify-JS-file'))

    gulp.watch('pug js/**/*.pug', gulp.series('Pug-HTML'))

    gulp.watch(['style/main.scss', 'style/bootstrap-rtl.css'], gulp.series('compact-file'))
    
    gulp.watch('style/f*.*', gulp.series('transfert-fonts'))//gulp.watch('fip', 'task name')
    
    gulp.watch('style/main.scss', gulp.series('transfert-CSS-file'))
    
    gulp.watch('script/**/*.js', gulp.series('transfert-JS-files'))
        
    gulp.watch('style/**/*.scss', gulp.series('SCSS-CSS'))
    
    gulp.watch('startpoint.*', gulp.parallel('Vue-task',
                                             'bundle-JS-files',
                                             'minify-JS-file',
                                             'img-compress&transfert',
                                             'Pug-HTML',
                                             'transfert-CSS-file',
                                             'transfert-fonts',
                                             'transfert-JS-files',
                                             'SCSS-CSS',
                                             'compact-file'))
});

//Default task
gulp.task('default', gulp.parallel('watch')); //gulp.series was here!