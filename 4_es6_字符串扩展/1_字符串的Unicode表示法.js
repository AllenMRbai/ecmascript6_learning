// ##字符的Unicode表示法
function case1_1(){
	//JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点
	//这种表示法只限于码点在\u0000~\uFFFF之间的字符
	let u="\u0061"
	console.log(u)
}

function case1_2(){
	//超出\u0000~\uFFFF之间范围的字符，必须用两个双字节的形式表示。
	let u1="\uD842\uDFB7"
	let u2="\u20BB7"//JavaScript 会理解成\u20BB+7。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7
	console.log(u1)
	console.log(u2)
}

function case1_3(){
	//ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
	"\u{20BB7}"
	// "𠮷"

	"\u{41}\u{42}\u{43}"
	// "ABC"

	let hello = 123;
	hell\u{6F} // 123

	'\u{1F680}' === '\uD83D\uDE80'
	// true
}
