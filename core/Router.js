const ErrorController = require('../app/Controllers/ErrorController');

class Router {
    constructor() {
        this.routes = {};
    }

    register(method, path, handler) {
        this.routes[`${method.toUpperCase()} ${path}`] = handler;
    }

    get(path, handler) {
        this.register('GET', path, handler);
    }

    handle(req, res) {
        const key = `${req.method} ${req.url}`;
        const handler = this.routes[key];
        const isJsonRequest = req.headers['accept'] === 'application/json';

        if (handler) {
            try {
                handler(req, res, isJsonRequest);
            } catch (err) {
                // If an error is thrown, forward to the ErrorController and pass the error message
                ErrorController.internalServerError(req, res, isJsonRequest, err.message);
            }
        } else {
            // If no route matches, forward to the ErrorController for 404
            ErrorController.notFound(req, res, isJsonRequest);
        }
    }
}

module.exports = new Router();
