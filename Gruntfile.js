module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),

		less: {
		  development: {
		    options: {
		      paths: ['less'],
		      compress: true
		    },
		    files: {
		      'public/stylesheets/main.css': 'less/main.less'
		    }
		  }
		},
		watch: {
		  scripts: {
		    files: ['less/*.less'],
		    tasks: ['less:development'],
		  },
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("compile-less", ["watch"]);
}