module.exports = function(grunt) {

  var destinationFolder = 'sweco-bootstrap';

  grunt.initConfig({
    shell: {
      buildEmber: 'ember build --environment=production',
      makeDir: 'mkdir sweco-bootstrap',
      removeDir: 'rm -rf sweco-bootstrap'
    },

    copy: {
      app: {
        files: [
          { expand: true, cwd: 'bower_components', src: 'bootstrap/scss/**', dest: 'app/styles' },
          { expand: true, cwd: 'bower_components', src: 'font-awesome/scss/**', dest: 'app/styles' },
          { expand: true, cwd: 'bower_components/font-awesome', src: 'fonts/**', dest: 'public' }
        ]
      },
      build: {
        files: [
          { expand: true, cwd: 'dist', src: 'fonts/*', dest: destinationFolder + '' },
          { expand: true, cwd: 'dist', src: 'img/*', dest: destinationFolder + '' },
          { expand: true, cwd: 'dist', src: 'demo/*', dest: destinationFolder + '' },
          { expand: true, cwd: 'dist/assets', src: 'sweco-bootstrap.css', dest: destinationFolder + '/css' },
          { expand: true, cwd: 'dist/assets', src: 'vendor.js', dest: destinationFolder + '/scripts' },
          { expand: true, cwd: 'dist/scripts', src: 'application.js', dest: destinationFolder + '/scripts' },
          { expand: true, cwd: 'dist/css', src: 'application.css', dest: destinationFolder + '/css' },
          { expand: true, cwd: 'dist', src: 'starter-template.html', dest: destinationFolder }
        ]
      }
    },

    rename: {
      script: { src: destinationFolder + '/scripts/vendor.js', dest: destinationFolder + '/scripts/sweco-bootstrap.min.js' },
      css: { src: destinationFolder + '/css/sweco-bootstrap.css', dest: destinationFolder + '/css/sweco-bootstrap.min.css' }
    },

    compress: {
      main: {
        options: { archive: 'dist.zip' },
        files: [ { src: [destinationFolder + '/**'], dest: '' } ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['copy:app']);
  grunt.registerTask('build', ['shell:buildEmber', 'shell:removeDir', 'shell:makeDir', 'copy:build', 'rename', 'compress']);

};