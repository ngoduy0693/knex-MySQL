async function knexshow(context,next) {

    let result = await context.knex.select('*').from('users').where('name', 'like','%' + context.query.name + '%');
    context.nameuser = result;
    await next();
}
module.exports = knexshow;