const Controller = require('../../core/Controller');

class HomeController extends Controller {
    constructor() {
        super(); 
        this.index = this.index.bind(this);  
    }

    index(req, res, isJsonRequest) {
        
        if (isJsonRequest) {
            this.json(res, { message: 'Welcome to the Home Page!' });
        } else {
            this.render(res, 'Home', { name: 'User' });
        }
    }
}

module.exports = new HomeController();
