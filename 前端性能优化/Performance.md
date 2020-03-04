## 如何监控前端性能
通过调用全局的只读属性`window.performance`获取到当前页面中与性能相关的信息
* `performance` 属性
    * `performance.navigation` 提供了在指定时间内发生的操作相关信息
        * `redirectCount` 返回当前页面发生了多少次重定向
        * `type` 三个取值
            * `0`: `TYPE_NAVIGATE` 用户通过常规导航方式访问页面，如果点击一个链接，或者一般的`get`方式
            * `1`：`TYPE_RELOAD` 用户通过刷新，包括`JS`调用刷新接口等方式访问页面
            * `2`：`TYPE_RELOAD` 用户通过刷新，包括`JS`调用刷新接口等方式访问页面
    * `performance.timeOrigin` 返回性能测量开始时间的高精度时间戳
    * `performance.memory` 是`chrome`添加的一个非标准扩展，提供了浏览器基本的内存使用情况
        * `jsHeapSizeLimit` 内存大小限制
        * `totalJSHeapSize` 当前`JS`堆栈内存总大小
        * `userdJSHeapSize` 所有被使用的`JS`堆栈内存，不能大于`totalJSHeapSize`，假如出现大于的情况，可能出现内存泄漏
    * `performance.timing` 包括了页面性能相关的性能信息 
    ![performance.timing执行流程](../../../assets/images/performance_timing.png)
        * 性能计算指标
            * `DNS`查询耗时：`domainLookupEnd` - `domainLookupEnd`
            * `TCP`连接耗时：`connectEnd` - `connectEnd`
            * `request`请求耗时：`responseEnd` - `responseStart`
            * 解析`dom`树耗时：`domComplete` - `domInteractive`
            * 白屏时间 = `domloadng` - `fetchStart`
            * `domready`时间 = `domContentLoadedEventEnd` - `fetchStart`
            * `onload`时间 = `loadEventEnd` - `fetchStart`
        * 以下是其属性执行的流程和说明
            1. `navigationStart` 当前浏览器的前一个网页关闭发生`unload`事件时的`Unix`毫秒时间戳，如果没有前一个网页，`navigationStart`等于`fetchStart`
            2. `redirectStart` 返回第一个`http`跳转开始时的`Unix`毫秒时间戳，如果没有跳转，或者不同源，返回`0`
            3. `redirectEnd` 返回最后一个`http`跳转结束时的`Unix`毫秒时间戳，如果没有跳转，或者不同源，返回`0`
            4. `fetchStart` 返回浏览器准备使用`http`请求读取文档时的`Unix`毫秒时间戳，该事件发生在网页查询本地缓存之前
            5. `domainLookupStart` 返回域名查询开始时的`Unix`毫秒时间戳，如果使用持久连接，或者信息是从本地缓存获取,则返回值等于`fetchStart`
            6. `domainLookupEnd` 返回域名查询结束时的`Unix`毫秒时间戳，如果使用持久连接，或者信息是从本地缓存获取，则返回值等于`fetchStart`
            7. `connectStart` 返回`http`请求开始向服务器发送时的`Unix`毫秒时间戳，如果使用持久连接，则返回值等于`fetchStart`
            8. `secureConnectionStart` 返回浏览器与服务器开始安全连接的握手时的`Unix`毫秒时间戳，如果当前网页不要求安全连接，则返回`0`
            9. `connectEnd` 返回浏览器与服务器之间的连接建立（连接建立指所有的握手和认证过程全部结束）时的`Unix`毫秒时间戳，如果使用持久连接，则返回值等同于`fetchStart`
            10. `requestStart` 返回浏览器向服务器发起`http`请求时（或开始读取本地缓存时）的`Unix`毫秒时间戳
            11. `responseStart` 返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的`Unix`毫秒时间戳
            12. `unloadEventStart` 如果有前一个网页，且与当前网页同源，则返回前一个网页`unload`事件发生时的`Unix`毫秒时间戳，如果没有前一个网页，或前一个网页与当前网页不同源，返回`0`
            13. `unloadEventEnd` 如果有前一个网页，且与当前网页同源，则返回前一个网页`unload`事件的回调函数结束时的`Unix`毫秒时间戳，如果没有前一个网页，或前一个网页与当前网页不同源，返回`0`
            14. `responseEnd` 返回浏览器从服务器收到（或从本地缓存读取）最后一个字节时（如果在此之前`http`连接已经关闭，则返回关闭时）的`Unix`毫秒时间戳
            15. `domLoading` 返回当前网页`dom`结构开始解析时（即`document.readyState`属性变为`loading`，相应的`readystatechange`事件触发时）的`Unix`毫秒时间戳
            16. `domInteractive` 返回当前网页`dom`结构解析结束、开始加载内嵌资源时（即`document.readyState`属性变为`interactive`，相应的`readystatechange`事件触发时）的`Unix`毫秒时间戳
            17. `domContentLoadedEventStart` 返回当前网页`DOMContentLoaded`事件发生时（即`dom`结构解析完毕，所有脚本开始运行时）的`Unix`毫秒时间戳
            18. `domContentLoadedEventEnd` 返回当前网页`DOMContentLoaded`事件结束时的`Unix`毫秒时间戳
            19. `domComplete` 返回当前网页`dom`结构生成时（即`document.readyState`属性变为`complete`，以及相应的`readystatechange`事件发生时）的`Unix`毫秒时间戳
            20. `loadEventStart` 返回当前网页`load`事件的回调函数开始时的`Unix`毫秒时间戳，如果该事件未发生，返回`0`
            21. `loadEventEnd` 返回当前网页`load`事件的回调函数结束时的`Unix`毫秒时间戳，如果该事件未发生，返回`0`
* `performance` 方法
    * `performance.getEntries()` 加载网页时各种资源的测速的数组列表
    * `performance.now()` 返回一个表示从性能测量时刻开始（`navigationStart`）到当前时间经过的毫秒数，可以用来计算某个操作，或某个方法执行的耗时
    * `performance.mark()` 在浏览器的性能输入缓冲区中创建一个时间戳，基于给定的`name`，`performance.mark()`给相应的时间戳做标记，结合`performance.measure()`使用也可以算出各个时间段的耗时
    * `performance.clearMarks()` 从浏览器的性能输入缓冲区中移除给定的`mark`
    * `performance.measure()` 在浏览器的指定`start mark`和`end mark`间的性能输入缓冲区中创建一个指定的时间戳
    * `performance.clearMeasures()` 从浏览器的性能输入缓冲区中移除给定的`measure`
    * `performance.getEntriesByType()` 返回一个`performance.getEntriesByType()`对象的列表，基于给定的`entry type`，例如`performance.getEntriesByType('measure')`就可以获取该值
    * `performance.getEntriesByName()` 返回一个`PerformanceEntry`对象的列表，基于给定的`name`和`entry type`
    * `performance.toJSON()` 将`performance`对象转换成`JSON`对象
    * `performance.setResourceTimingBufferSize()` 将浏览器的资源`timing`缓冲区大小设置为`resource" type performance entry`对象的指定数量
    * `performance.clearResourceTimings()` 从浏览器的性能输入缓冲区中移除所有的`entryType`是`resource`的`performance entries`
