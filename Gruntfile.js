module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');

    function loadConfig(module) {
        grunt.log.write('bla');
        var moduleConfig = grunt.template.process(
            './grunt_config/<%= module %>.js',
            {data: {module: module}}
        );
        return require(moduleConfig)(pkg, grunt);
    }

    grunt.initConfig({
        pkg: pkg,
        npm: loadConfig('npm'),
        bower: loadConfig('bower')
    });
    grunt.log.write('registering taskss');
    grunt.registerTask('deps', ['npm-install']);
};