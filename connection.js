
async function connect(context,next){
  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '1',
      database : 'client'
    }
  });

  context.knex = knex;
  await next();
}

module.exports = connect;
