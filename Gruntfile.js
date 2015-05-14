module.exports = function(grunt) {
    grunt.initConfig({
        distFolder: 'release/assets',
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            files: {
                src: 'source/assets/scripts/*.js',
                dest: 'release/assets/scripts/',
                expand: true,
                flatten: true
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'source/assets/styles',
                    src: ['*.css'],
                    dest: 'release/assets/styles'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: false,
                    collapseWhitespace: true
                },
                files: {
                    'release/index.html': 'source/index.html',
                    'release/docs.html': 'source/docs.html',
                    'release/download.html': 'source/download.html',
                    'release/404.html': 'source/404.html',
                    'release/500.html': 'source/500.html'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'source/assets/fonts/', src: ['**'], dest: 'release/assets/fonts/'},
                    {expand: true, cwd: 'source/assets/images/', src: ['**'], dest: 'release/assets/images/'}
                ]
            }
        },
        'string-replace': {
            dist: {
                files: {
                    'release/index.html': 'source/index.html',
                    'release/docs.html': 'source/docs.html',
                    'release/download.html': 'source/download.html',
                    'release/404.html': 'source/404.html',
                    'release/500.html': 'source/500.html'
                },
                options: {
                    replacements: [{
                        pattern: /<!-- @import (.*?) -->/ig,
                        replacement: function (match, p1) {
                            //return grunt.file.read(grunt.config.get('dist') + p1);
                            return grunt.file.read('domain/' + p1);
                        }
                    }]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'copy', 'string-replace']);
};