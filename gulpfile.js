'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    path = require('path'),
    webpack = require('webpack'),
    webpackConf = require('./webpack.config.js');

gulp.task('default', ['build'], function () {});

gulp.task('clean', function () {
  gulp.src('js', { read: false })
    .pipe(clean());
});


gulp.task('build', ['webpack'], function () {});

gulp.task('webpack', function (callback) {
  webpack(webpackConf, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }

    gutil.log('[webpack:build]', stats.toString({
      color: true
    }));

    callback();
  });
});
