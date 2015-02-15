/**
 * Created by Gerardo on 08/02/2015.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        stylus:{
          commpile:{
              options:{
                  paths:['src/stylus/import']
              },
              files:{
                  'app/css/main.min.css':'src/stylus/main.styl'
              }
          }
        },
        uglify:{
            options:{
                sourceMap:true,
                sourceMapIncludesSourcces:true,
                compress:{
                    drop_console:false
                }
            },
            main:{
                files:{
                    'app/js/main.min.js':['src/js/*.js']
                }
            }
        },
        browserSync:{
            dev:{
                bsFiles:{
                    src:['app/css/*.css', 'app/**/*.html', 'app/js/main.min.js']
                },
                options:{
                    watchTask:true
                }
            }
        },
        watch:{
            stylesheets:{
                files:'src/stylus/**/*.styl',
                tasks: ['stylus']
            },
            script:{
                files:'src/js/*.js',
                tasks:'uglify'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['stylus', 'uglify', 'browserSync', 'watch']);

};