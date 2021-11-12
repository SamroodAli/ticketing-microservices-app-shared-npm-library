module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-prompt');

  grunt.initConfig({

    prompt: {
      patch: {
        options: {
          questions: [{
            config: 'gitmessage',
            type: 'input',
            message: 'Commit message for PATCH version bump:'
          }]
        }
      },
      minor: {
        options: {
          questions: [{
            config: 'gitmessage',
            type: 'input',
            message: 'Commit message for MINOR version bump:'
          }]
        }
      },
      major: {
        options: {
          questions: [{
            config: 'gitmessage',
            type: 'input',
            message: 'Commit message for MAJOR version bump:'
          }]
        }
      }
    },
    bump: {
      options: {
        updateConfigs: [],
        addFiles: ["."], 
        commit: true,
        commitMessage: '<%=grunt.config("gitmessage")%>',
        commitFiles: ["-a"] ,
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: false,
        metadata: '',
        regExp: false
      }
    }

  });

  grunt.registerTask('bump-patch', ['prompt:patch', 'bump:patch']);
  grunt.registerTask('bump-minor', ['prompt:minor', 'bump:minor']);
  grunt.registerTask('bump-major', ['prompt:major', 'bump:major']);
}