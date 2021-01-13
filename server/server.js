const Koa=require('koa');
const Router=require('koa-router');
const mysql=require('mysql');
const co=require('co-mysql');
const body=require('koa-better-body');

let conn=mysql.createPool({host: 'localhost', user: 'norris', password: 'hobby1515', database: 'ydc'});

let server=new Koa();
server.listen(8081);

let obj=body({uploadDir: 'upload'});
server.use(obj);

server.context.db=co(conn);

server.use(async (ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin', '*');

  await next();
});

let router=new Router();

router.use('/api', require('./routers/api'));

server.use(router.routes());
