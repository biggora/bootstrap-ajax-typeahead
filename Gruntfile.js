/*!
 * Bootstrap Ajax Typeahead's Gruntfile
 * Copyright 2014 Alexey Gordeyev
 * Licensed under MIT (https://github.com/biggora/bootstrap-ajax-typeahead/blob/master/LICENSE)
 */
module.exports = function(grunt) {
    'use strict';
    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    grunt.file.defaultEncoding = 'utf8';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: grunt.file.read('./src/banner.txt'),
        concat: {
            js: {
                options: {
                    banner: '<%= banner %>'
                },
                src: ['src/<%= pkg.name %>.js'],
                dest: 'js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('build', ['concat:js', 'uglify']);
};