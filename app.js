//服务器入口文件
//创建koa实例对象
const Koa = require('koa')
const app = new Koa()
//绑定中间件
// 第一层
const respDurationMiddleware=require('./middleware/koa_response_durations.js')
app.use(respDurationMiddleware)
// 第二层
const resHead = require('./middleware/koa_response_header')
app.use(resHead)
// 第三层
//绑定端口号
app.listen(8082)