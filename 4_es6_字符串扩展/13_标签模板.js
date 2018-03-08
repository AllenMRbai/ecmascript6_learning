//#带变量的标签模板（tagged template）
function case1_1(){
	let a = 5;
	let b = 10;

	tag`Hello ${ a + b } world ${ a * b }`;
	// 等同于
	tag(['Hello ', ' world ', ''], 15, 50);
	//函数tag依次会接收到多个参数
	function tag(stringArr, ...values){
	  // ...
	}
}

function case1_2(){
	//简单的标签模板例子
	let a = 5;
	let b = 10;

	function tag(s, v1, v2) {
	  console.log(s[0]);
	  console.log(s[1]);
	  console.log(s[2]);
	  console.log(v1);
	  console.log(v2);

	  return "OK";
	}

	tag`Hello ${ a + b } world ${ a * b}`;
	// "Hello "
	// " world "
	// ""
	// 15
	// 50
	// "OK"
}

function case1_3(){
	//复杂的标签模板例子
	//这个例子展示了，如何将各个参数按照原来的位置拼合回去。
	let total = 30;
	let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

	function passthru(literals) {
	  let result = '';
	  let i = 0;
	  console.log(literals)
	  while (i < literals.length) {
	    result += literals[i++];
	    if (i < arguments.length) {
	      result += arguments[i];
	    }
	  }

	  return result;
	}
	console.log(msg)// "The total is 30 (31.5 with tax)"
}

//#"标签模板"防止恶意内容
function case1_4(){
	//“标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容
	let sender='<script>alert("abc")</script>'; // 恶意代码
	let message =
	SaferHTML`<p>${sender} has sent you a message.</p>`;

	function SaferHTML(templateData) {
	  let s = templateData[0];
	  for (let i = 1; i < arguments.length; i++) {
	    let arg = String(arguments[i]);

	    // Escape special characters in the substitution.
	    s += arg.replace(/&/g, "&amp;")
	            .replace(/</g, "&lt;")
	            .replace(/>/g, "&gt;");

	    // Don't escape special characters in the template.
	    s += templateData[i];
	  }
	  return s;
	}
}

//#"标签模板"raw属性
function case1_5(){
	tag`First line\nSecond line`

	function tag(strings) {
	  console.log(strings.raw[0]);
	  console.log(strings[0]);
	  // strings.raw[0] 为 "First line\\nSecond line"
	  // 打印输出 "First line\nSecond line"
	}
}

//#"标签模板"实现原生的String.row方法
function case1_6(){
	let allen=`allen\ncool`
	raw = function (strings, ...values) {
	  let output = '';
	  let index;
	  for (index = 0; index < values.length; index++) {
	    output += strings.raw[index] + values[index];
	  }

	  output += strings.raw[index]
	  return output;
	}
	console.log(raw`allen \n is cool`)
}
