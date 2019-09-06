const mongoose = require('mongoose');
let General = mongoose.model('General');

const list_all_generals = async (ctx, next) => {
    try {
        let general = await General.find({});
        ctx.body = general;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};

const create_a_general = async (ctx, next) => {
    try {
        let new_general = new General(ctx.request.body);
        await new_general.save()
            .then(data => {
                ctx.body = data
            })
            .catch(err => {
                ctx.body = 'error: ' + err
            })
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};

module.exports = {
  list_all_generals,
  create_a_general
};
