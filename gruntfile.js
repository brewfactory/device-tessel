module.exports = function(grunt) {
  grunt.initConfig({
    'blacklist-dev-deps': {
      default: {}
    }
  });

  grunt.registerTask('deploy', [
    'blacklist-dev-deps',
  ]);

  grunt.loadNpmTasks('grunt-tessel');
};
