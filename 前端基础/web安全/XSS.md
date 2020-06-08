## 攻击类型

1. XSS 跨站脚本攻击
2. CSRF 跨站请求伪造
3. SQL 注入
4. 点击劫持
5. 中间人攻击

### XSS 跨站脚本攻击

危害：

1. 获取页面数据
2. 获取 cookie
3. 劫持前端逻辑
4. 发送请求
5. 偷取网站任意数据
6. 偷取用户资料
7. 偷取用户密码和登陆态
8. 欺骗用户

分类：
以下三种方式都是基于 js 脚本的攻击

1. 反射型/非持久型（对服务端漏洞攻击）
   通过 url 参数直接注入

   举个例子：
   http://localhost/xssTest/test.php?userName=jack 正常获取
   那假如我们 url 嵌入 js 代码呢？
   http://localhost/xssTest/test.php?userName=<script>window.open(http://www.baidu.com)</script>

2. 存储型/持久型（对服务端漏洞攻击）
   服务端会把黑客输入的恶意脚本存储在服务器的数据库中，当用户访问包含这个恶意脚本的页面时，用户将会受到黑客攻击

   举个例子：
   一个黑客写下一篇包含恶意 JavaScript 脚本的博客文章，当其他用户浏览这篇文章时，恶意的 JavaScript 脚本将会执行

3. DOM Based XSS-基于 DOM 的基于（对浏览器端漏洞的攻击）
   基于 DOM 修改 js 代码

   举个例子：
   大学的时候我们都接触过网课，这些网页本身会有自身的一个机制判断你是否挂机，比如挂机多少分钟会弹出一些题目让我们去回答，我们可以控制台去修改他的 DOM 及 js 代码，让弹窗消失，从而达到我们挂机上网课的目的

如何防御？

1. 输出检查，对输出进行转义
   1.1 将 HTML 实体转化为相应的实体编号 `<` 转换成 &lt;
   2.2 JavaScript 编码 在往 JavaScript 代码里插入数据的时候，只有一种情况是安全的，那就是对不可信数据进行 JavaScript 编码 并且只把这些数据放到使用引号包围起来的值部分（data value）之中，除了上面的那些转义之外，还要附加上下面的转义 `\` 转成 `\\` `/` 转成 `\/` `;` 转成`；`(全角;)
2. 一些主流浏览器本身有对抗 XSS 的措施，比如 IE8 的 XSS filter
3. Http Only cookie 许多 XSS 攻击的目的就是为了获取用户的 cookie，将重要的 cookie 标记为 http only，这样的话当浏览器向服务端发起请求时就会带上 cookie 字段，但是在脚本中却不能访问 cookie，这样就避免了 XSS 攻击利用 js 的  document.cookie 获取 cookie
