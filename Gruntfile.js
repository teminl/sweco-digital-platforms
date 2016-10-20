module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
        buildEmber: 'ember build --environment=production',
        makeTmpDir: 'mkdir sweco-bootstrap',
        removeTmpDir: 'rm -rf sweco-bootstrap',
        removeDevScss: 'rm -rf sweco-bootstrap/scss/_sweco-dev.scss'
    },

    copy: {
      fonts: { expand: true, cwd: 'dist', src: 'fonts/*', dest: 'sweco-bootstrap' },
      img: { expand: true, cwd: 'dist', src: 'img/*', dest: 'sweco-bootstrap' },
      css: { expand: true, cwd: 'dist/assets', src: 'sweco-bootstrap.css', dest: 'sweco-bootstrap/css' },
      script: { expand: true, cwd: 'dist/assets', src: 'vendor.js', dest: 'sweco-bootstrap/scripts' },
      scriptApp: { expand: true, cwd: 'dist/scripts', src: 'application.js', dest: 'sweco-bootstrap/scripts' },
      cssApp: { expand: true, cwd: 'dist/css', src: 'application.css', dest: 'sweco-bootstrap/css' },
      html: { expand: true, cwd: 'dist', src: 'starter-template.html', dest: 'sweco-bootstrap' }
    },

    rename: {
      script: { src: 'sweco-bootstrap/scripts/vendor.js', dest: 'sweco-bootstrap/scripts/sweco-bootstrap.min.js' },
      css: { src: 'sweco-bootstrap/css/sweco-bootstrap.css', dest: 'sweco-bootstrap/css/sweco-bootstrap.min.css' }
    },

    compress: {
      main: {
        options: { archive: 'dist.zip' },
        files: [ { src: ['sweco-bootstrap/**'], dest: '' } ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['shell:buildEmber', 'shell:removeTmpDir', 'shell:makeTmpDir', 'copy', 'rename', 'shell:removeDevScss', 'compress']);

};