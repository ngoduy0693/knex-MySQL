const Koa = require('koa');
const app = new Koa();

const knex = require('./connection');
const checkdata  = require('./checkData');
const showUser   = require('./showUser');

app.use(knex);
app.use(showUser);
app.use(checkdata);

app.listen(5002);