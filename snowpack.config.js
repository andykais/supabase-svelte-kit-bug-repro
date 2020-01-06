// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components'
	},
	alias: {
		$components: './src/components'
	},
  // fix suggested by @langbamit:
  installOptions: {
    externalPackage: require('module').builtinModules.filter(pkg_name => pkg_name !== "process")
  },
};
