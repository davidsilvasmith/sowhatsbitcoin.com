     module.exports = function(grunt) {
         grunt.initConfig({

             less: {
                dev: {
                     options: {
                         paths: ["assets/css"]
                     },
                     files: {"./css/sowhatsbitcoin.css": "./css/sowhatsbitcoin.less"}
                 },
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
                    tasks: ['less:dev']
             },
             img : {
                task1: {
                src: './images'
                }
             },
            spell: {
//                     files: ['./_site/404.html']
//                     files: ['./_site/About/index.html']
//                     files: ['./_site/for-businesses/index.html']
//                    files: ['./_site/for-developers/index.html']
//                    files: ['./_site/for-individuals/buy/index.html']
//                    files: ['./_site/for-individuals/faq/index.html']
//                    files: ['./_site/for-individuals/index.html']
                    files: ['./_site/index.html']

                     //files: ['./_site/**/*.html']
             },
         'link-checker': {
              dev: {
                site: 'localhost',
                options: {
                  initialPort: 4000
                }
              }
            },

            filetransform: {
                options: {
                  // Task-specific options go here.
                },
                files: {
                        files: {
                            'example': ['file1', 'file2']
                },
            },
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-img');
         grunt.loadNpmTasks('grunt-spell');
         grunt.loadNpmTasks('grunt-link-checker');
         grunt.registerTask('default', ['watch']);
         grunt.registerTask('check', ['spell']);
         grunt.loadNpmTasks('grunt-filetransform');

         grunt.registerTask('prod', ['img', 'less:production', 'link-checker' ])
     };