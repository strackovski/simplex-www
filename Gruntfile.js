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
                    'release/404.html': 'source/404.html'
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'copy']);
};