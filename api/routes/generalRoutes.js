module.exports = function routes(router) {
    let generalController = require('../controllers/generalController')

    router.get('/general', generalController.list_all_generals);
    router.post('/general', generalController.create_a_general);
};
