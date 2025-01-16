const Controller = require('../../core/Controller');

class ErrorController extends Controller {
    // Handle 404 errors
    notFound(req, res, isJsonRequest) {
        const errorResponse = { message: 'Page not found' };
        if (isJsonRequest) {
            this.json(res, errorResponse); // Return JSON for API requests
        } else {
            this.render(res, 'Error', { message: errorResponse.message }); // Return HTML view
        }
    }

    // Handle 500 errors (internal server error)
    internalServerError(req, res, isJsonRequest, errorMessage) {
        const errorResponse = { message: errorMessage || 'Internal Server Error' };
        if (isJsonRequest) {
            this.json(res, errorResponse); // Return JSON for API requests
        } else {
            this.render(res, 'Error', { message: errorResponse.message }); // Return HTML view
        }
    }
}

module.exports = new ErrorController();
