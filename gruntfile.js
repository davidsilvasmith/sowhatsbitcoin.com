     module.exports = function(grunt) {
         grunt.initConfig({
         'link-checker': {
              dev: {
                site: 'localhost',
                options: {
                  initialPort: 4000
                }
              }
            },
         });
         grunt.loadNpmTasks('grunt-link-checker');
         grunt.registerTask('default', ['link-checker']);
     };