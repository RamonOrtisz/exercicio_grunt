module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            deevelopment: {
                files: {
                    'compress/main.css': 'styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'minificado/main.min.css': 'styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'compress/main.min.js': 'scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less'], ['uglify']);
}