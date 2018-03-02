function case1_1(){
	//O（\u004F）和ˇ（\u030C）合成Ǒ（\u004F\u030C）在视觉和语义上都等价，但是 JavaScript 不能识别。
	//ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。
	'\u01D1'.normalize() === '\u004F\u030C'.normalize()
	//true
}