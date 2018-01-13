'use strict';
const properties = require('../controllers/propertyController');

module.exports = function(app) {
    // todoList Routes
    // app.route('/properties')
    //     .get(properties.list_all_properties);


    // app.route('/properties/:propertId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);

    app.get('/properties', async function(req, res, next) {
        try {
            const result = await properties.list_all_properties();
            res.json(result);
        } catch(err) {
            next(err);
        }
    });

    app.use((err, req, res, next) => {
        /* do something with the error */
        console.error(err);
    });
};