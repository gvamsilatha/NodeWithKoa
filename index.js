const Koa =  require("koa");
const app =module.exports = new Koa();
app.use(async ctx => {
    ctx.body = 'Koa says Hi!';
});

var port = process.env.port || (process.argv[2] )
app.listen(port);
console.log("Application Started.");