'use strict';

module.exports = function (grunt) {
  require('load-grunt-config')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              presets: ['es2015', 'stage-0']
            }]
          ]
        },
        files: {
          './dist/bundle.js': ['./src.es6/**/*.js']
        }
      }
    },
    connect: {
      all: {
        options: {
          hostname: '*',
          port: process.env.PORT || '6789',
          base: '.',
          livereload: true
        }
      }
    },
    watch: {
      js: {
        files: ['./src.es6/**/*.js'],
        tasks: ['js'],
        options: {
          livereload: true
        }
      }
    },

    bump: {
      options: {
        files: [
          'package.json'
        ],
        updateConfigs: ['pkg'],
        commitFiles: [
          'package.json',
          'AUTHORS.md',
          'CHANGELOG.md'
        ],
        commitMessage: 'Release v<%= pkg.version %>',
        push: false
      }
    },
    changelog: {
      release: {
        options: {
          version: '<%= pkg.version %>',
          changelog: 'CHANGELOG.md'
        }
      }
    },
    committers: {
      options: {
        email: true,
        output: 'AUTHORS.md'
      }
    }
  });

  grunt.registerTask('js', ['browserify']);
  grunt.registerTask('build', ['js']);
  grunt.registerTask('dist', ['build']);
  grunt.registerTask('start', ['dist', 'connect', 'watch']);
  grunt.registerTask('default', ['start']);
  grunt.task.registerTask('release', function (version) {
    grunt.task.run(['bump-only:' + (version ? version : 'patch'), 'changelog', 'committers', 'bump-commit']);
  });
};
