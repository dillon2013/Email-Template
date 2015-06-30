var helpers = require('./my-helpers');

module.exports = function(grunt){

	// load the tasks that you want to use after installing with loadNpmTasks
	grunt.loadNpmTasks('grunt-ejs');

	// configure grunt tasks
	grunt.initConfig({

		pkg : grunt.file.readJSON('package.json'),

		ejs : {
			all : {
				options : grunt.util_merge(helpers,{}),
				src :'index.ejs',
				dest : 'dist/index.html'
			}
		}

	});

	//create commands for terminal 
	grunt.registerTask('build',['ejs']);

}