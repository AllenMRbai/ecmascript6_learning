/*
title:自己手动实现一个模板编译
来自软一峰的es6教程第四章第12节的 实例：模板编译
链接：http://es6.ruanyifeng.com/#docs/string
*/

//假设有如下一个模板，请手动实现一个
/*
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
*/

//思路是将其转换为 JavaScript 表达式字符串。如下
/*
echo('<ul>');
for(let i=0; i < data.supplies.length; i++) {
  echo('<li>');
  echo(data.supplies[i]);
  echo('</li>');
};
echo('</ul>');
*/

//以下是我按着软一峰教程的思路自己写的，查看原版代码请上阮老师的网站
function compile(template){
	let temValue=/<%=(.*)%>/g;
	let temScope=/<%(.*)%>/;

	let template=template
		.replace(temValue,'`) \n echo(`$1`) \n echo(`')
		.replace(temScope,'`) \n $1 \n echo(`')

	let script='(function(data){echo(`'+template+'`)})'
	
	return script;
}

function parse(template,params={}){
	let parser=eval(compile(template))
}