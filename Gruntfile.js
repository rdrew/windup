module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          require: ['sass-globbing'], // e.g. susy, breakpoint
          bundleExec: true,           // Run sass with bundle exec: bundle exec sass
          sourcemap: false,           // Enable Source Maps.
          trace: false,               // Show a full traceback on error.
          unixNewlines: true,         // Force Unix newlines in written files.
          style: 'compressed'        // Output style. Can be nested, compact, compressed, expanded
        },
        files: {
          'scss/style.scss': 'css/style.css'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch', 'sass']);

};