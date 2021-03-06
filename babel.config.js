module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.ts', '.tsx'],
				alias: {
					'@app': './App/prodApp/app',
					'@images': './App/prodApp/assets/images',
					'@fonts': './App/prodApp/assets/fonts',
					'@components': './App/prodApp/components',
					'@navigation': './App/prodApp/navigation/navigation',
					'@rnweb': './App/prodApp/libs/rnweb-light',
					'@screens': './App/prodApp/screens',
					'@state': './App/prodApp/state/state',
					'@logger': './App/prodApp/libs/logger',
					'@lib': './App/prodApp/libs',
					'@config': './App/prodApp/config',
				},
			},
		],
	],
}