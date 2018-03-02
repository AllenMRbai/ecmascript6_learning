// ##ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
function case1_1(){
	'x'.padStart(5, 'ab') // 'ababx'
	'x'.padStart(4, 'ab') // 'abax'

	'x'.padEnd(5, 'ab') // 'xabab'
	'x'.padEnd(4, 'ab') // 'xaba'
}

function case1_2(){
	//如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串
	'xxx'.padStart(2, 'ab') // 'xxx'
	'xxx'.padEnd(2, 'ab') // 'xxx'
}

function case1_3(){
	//如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
	'abc'.padStart(10, '0123456789')
	// '0123456abc'
}

function case1_4(){
	//如果省略第二个参数，默认使用空格补全长度。
	'x'.padStart(4) // '   x'
	'x'.padEnd(4) // 'x   '
}