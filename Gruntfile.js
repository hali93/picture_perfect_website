module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },
    watch: {
    scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
      } 
	},
    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,jpeg,gif}'],
            dest: 'images/compressed/'
        }]
      }
	},
	browserSync: {
      default_options: {
        bsFiles: {
          src: ["js/**/*.js", "css/*.css", "*.html"]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    } 

  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks("grunt-contrib-watch");
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};