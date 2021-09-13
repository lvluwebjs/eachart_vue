//计算总耗时时长中间件
module.exports = async (cxt,next)=>{
    //记录开始的时间
    const start = Date.now()
    //让内层中间件得到执行
    await next()
    //记录结束时间‘
    const end = Date.now()
    //设置响应头 X-Response-Time
    const duration = end - start
    //ctx.set设置响应头
    cxt.set('X-Response-Time',duration + 'ms')
}