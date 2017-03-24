## 简易的mock server
安装使用：在已经安装了node.js的情况下，进入工作目录，将index.js放到工作目录下，运行 node index.js
ps: router.js里包含了跨域的实验例子。
跨域实验：在hosts文件里加入

		127.0.0.1       a.com
		127.0.0.1       b.com
然后在a.com:8080/里向b.com:8080/发http请求,可以返回结果。如果没有设置response.setHeader('Access-Control-Allow-Origin', '*')，则会出现No Access-Control-Allow-Origin，错误。
