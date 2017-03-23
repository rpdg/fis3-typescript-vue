fis.set('project.fileType.text', 'ts');


fis.match('{**/*.ts,**.vue:typescript}', {
	parser: fis.plugin('typescript', {
		sourceMap: true,
		strictNullChecks: true,
		module: 1,
		target: 2,
		//showNotices : true ,
		noImplicitAny: true
	}),
	//packTo: '/js/ts.js',
	rExt: '.js',
	isMod : true ,
});


fis.match('{/@types/**.*,/comm/**.*}', {
	release: false
});


fis.match('::package', {
	postpackager: fis.plugin('loader'),
	useSourceMap: true // 合并后开启 SourceMap 功能。
});


//SCSS Compile
fis.match('*.scss', {
	parser: fis.plugin('node-sass', {
		outputStyle: 'compact',
		sourceMap: true
	}),
	rExt: '.css'
});


fis.match('**/**.vue', {
	isMod: true,
	rExt: 'js',
	useSameNameRequire: true,
	parser: [
		fis.plugin('vue-component', {
			// vue@2.x runtimeOnly
			runtimeOnly: true,          // vue@2.x 有润timeOnly模式，为ture时，template会在构建时转为render方法

			// styleNameJoin
			styleNameJoin: '',          // 样式文件命名连接符 `component-xx-a.css`

			extractCSS: true,           // 是否将css生成新的文件, 如果为false, 则会内联到js中

			// css scoped
			cssScopedIdPrefix: '_v-',   // hash前缀：_v-23j232jj
			cssScopedHashType: 'sum',   // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5`
			cssScopedHashLength: 8,     // hash 长度，cssScopedHashType为md5时有效

			cssScopedFlag: '__vuec__',  // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空
		})
	],
});

// vue组件中ts片段处理。
/*fis.match('**!/!**.vue:typescript', {
	parser: [
		fis.plugin('typescript')
	]
});*/
fis.match('**/**.vue:scss', {
	parser: [
		fis.plugin('node-sass', {
			sourceMap: true
		})
	],
	rExt: 'css',
});

// 开启模块化
fis.hook('commonjs', {
	baseUrl: './',
	extList: ['.ts','.vue'],
	paths: {
		vue: 'js/vue.js',
	}
});


/*fis.match('js/vue.js', {
	isMod: true,
	useSameNameRequire: true,
});*/
 /*
fis.unhook('components');
fis.hook('node_modules');*/

// fis3 server start --root ../dist
// fis3 release dev -d ../dist
