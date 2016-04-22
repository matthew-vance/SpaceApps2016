var gulp = require('gulp'),
nodemon = require('gulp-nodemon'),
browserSync = require('browser-sync');

gulp.task('default', ['browser-sync'], function(){

});

gulp.task('nodemon', function(cb){
    var started = false;

    return nodemon({
        script: 'server.js'
    }).on('start', function(){
        if(!started){
            cb();
            started = true;
        }
    })
});

gulp.task('browser-sync', ['nodemon'], function(){
    browserSync.init(null, {
        proxy: 'http://localhost:5000',
        files: ['app/**/*.*'],
        browser: 'google-chrome',
        port: 7000
    });
});
