module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
        buildEmber: 'ember build --environment=production',
        makeTmpDir: 'mkdir dist.tmp',
        removeTmpDir: 'rm -rf dist.tmp'
    },

    copy: {
      fonts: { expand: true, cwd: 'dist', src: 'fonts/*', dest: 'dist.tmp' },
      img: { expand: true, cwd: 'dist', src: 'img/*', dest: 'dist.tmp' },
      script: { expand: true, cwd: 'dist/assets', src: 'vendor.js', dest: 'dist.tmp/scripts' },
      css: { expand: true, cwd: 'dist/assets', src: 'sweco-bootstrap.css', dest: 'dist.tmp/css' },
      scriptApp: { expand: true, cwd: 'dist/scripts', src: 'application.js', dest: 'dist.tmp/scripts' },
      cssApp: { expand: true, cwd: 'dist/css', src: 'application.css', dest: 'dist.tmp/css' },
      html: { expand: true, cwd: 'dist', src: 'starter-template.html', dest: 'dist.tmp' }
    },

    rename: {
      script: { src: 'dist.tmp/scripts/vendor.js', dest: 'dist.tmp/scripts/sweco-bootstrap.min.js' },
      css: { src: 'dist.tmp/css/sweco-bootstrap.css', dest: 'dist.tmp/css/sweco-bootstrap.min.css' }
    },

    compress: {
      main: {
        options: { archive: 'dist.zip' },
        files: [ { src: ['dist.tmp/**'], dest: '' } ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['shell:buildEmber', 'shell:makeTmpDir', 'copy', 'rename', 'compress', 'shell:removeTmpDir']);

};