const View = require('./View');

class Controller {
    json(res, data) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }

    render(res, viewName, props = {}, isJsonRequest = false) {
        if (isJsonRequest) {
            this.json(res, props);
        } else {
            const content = View.renderJsx(viewName, props);
            const html = View.wrapHtml(content);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        }
    }
}

module.exports = Controller;
