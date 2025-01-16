const Router = require('../core/Router');
const HomeController = require('../app/Controllers/HomeController');
const AboutController = require('../app/Controllers/AboutController');

Router.get('/', HomeController.index);
Router.get('/about', AboutController.index);

Router.get('/error', (req, res, isJsonRequest) => {
    throw new Error('Simulated server error');
});


module.exports = Router;
