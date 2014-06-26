     module.exports = function(grunt) {
         grunt.initConfig({

             less: {
                 production: {
                     options: {
                         paths: ["assets/css"],
                         cleancss: true
                     },
                     files: {"./css/sowhatsbitcoin.css": "./css/sowhatsbitcoin.less"}
                 }
             },
             watch: {
                    files: ['**/*.less'],
                    tasks: ['less']
             },
             img : {
                task1: {
                src: './images'
                }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-img');
         grunt.registerTask('default', ['watch']);
         grunt.registerTask('prod', ['img'])
     };