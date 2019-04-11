async function checkuser(context) {
    if(context.nameuser) {
        return context.body = context.nameuser;
    } else {
        context.body = "user not found";
    }
}
module.exports = checkuser;