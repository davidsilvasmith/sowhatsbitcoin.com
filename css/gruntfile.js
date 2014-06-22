     module.exports = function(grunt) {
         grunt.initConfig({

             less: {
                 development: {
                     options: {
                         paths: ["assets/css"]
                     },
                     files: {"./sowhatsbitcoin.css": "sowhatsbitcoin.less"}
                 },
                 production: {
                     options: {
                         paths: ["assets/css"],
                         cleancss: true
                     },
                     files: {"./sowhatsbitcoin.css": "sowhatsbitcoin.less"}
                 }
             },
             watch: {
                    files: ['**/*.less'],
                    tasks: ['less']
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.registerTask('default', ['watch']);
     };