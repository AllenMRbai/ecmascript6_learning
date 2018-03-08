// #ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码。
function case0_1(){
	/^\uD83D/u.test('\uD83D\uDC2A'); // false
	/^\uD83D/.test('\uD83D\uDC2A'); // true
}

// #点字符
function case1_1(){
	//
	var s = '𠮷';

	/^.$/.test(s); // false
	/^.$/u.test(s); // true
}

// #Unicode 字符表示法
function case1_2(){
	//ES6 新增了使用大括号表示 Unicode 字符，这种表示法在正则表达式中必须加上u修饰符，才能识别当中的大括号，否则会被解读为量词。
	/\u{61}/.test('a'); // false
	/\u{61}/u.test('a'); // true
	/\u{20BB7}/u.test('𠮷'); // true
}

// #量词
function case1_3(){
	//使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符
	/a{2}/.test('aa') ;// true
	/a{2}/u.test('aa'); // true
	/𠮷{2}/.test('𠮷𠮷'); // false
	/𠮷{2}/u.test('𠮷𠮷'); // true
}

// #预定义模式
function case1_4(){
	//u修饰符也影响到预定义模式，能否正确识别码点大于0xFFFF的 Unicode 字符。
	/^\S$/.test('𠮷'); // false
	/^\S$/u.test('𠮷') // true
}

// #i 修饰符
function case1_4(){
	//有些 Unicode 字符的编码不同，但是字型很相近，比如，\u004B与\u212A都是大写的K。
	/[a-z]/i.test('\u212A'); // false
	/[a-z]/iu.test('\u212A'); // true
}