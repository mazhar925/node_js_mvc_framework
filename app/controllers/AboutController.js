const Controller = require('../../core/Controller');

class AboutController extends Controller {
    constructor() {
        super(); 
        this.index = this.index.bind(this);  
    }
    
    index(req, res, isJsonRequest) {
        if (isJsonRequest) {
            this.json(res, { message: 'About us information in JSON format.' });
        } else {
            this.render(res, 'About', {});
        }
    }
}

module.exports = new AboutController();
