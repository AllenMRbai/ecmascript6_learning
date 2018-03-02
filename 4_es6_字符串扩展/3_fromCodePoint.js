function case1_1(){
	//es5的fromCharCode方法不能识别Unicoe编号大于0xFFFF的字符
	String.fromCharCode(0x20BB7)//码点发生溢出，最高为2被舍弃
	// "ஷ"
}

function case1_2(){
	//ES6 提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符
	String.fromCodePoint(0x20BB7)
	// "𠮷"
	String.fromCodePoint(0x78, 0x1f680, 0x79)
	//"x🚀y"
	String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
	// true
}