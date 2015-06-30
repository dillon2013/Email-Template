var helpers = require('./my-helpers');

module.exports = function(grunt){

	

	// configure grunt tasks
	grunt.initConfig({

		pkg : grunt.file.readJSON('package.json'),

		ejs : {
			all : {
				options : helpers,
				src :'index.ejs',
				dest : 'dist/index.html'
			}
		},

		copy: {
		  main: {
		    src: 'images/*',
		    dest: 'dist/',
		  },
		},

	});


	// load the tasks that you want to use after installing with loadNpmTasks
	grunt.loadNpmTasks('grunt-ejs');
	grunt.loadNpmTasks('grunt-contrib-copy');

	//create commands for terminal 
	grunt.registerTask('build',['ejs','copy']);

}