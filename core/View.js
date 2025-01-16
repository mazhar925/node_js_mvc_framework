const path = require('path');
const fs = require('fs');

class View {
    static renderJsx(viewName, props = {}) {
        const filePath = path.join(__dirname, '../app/Views', `${viewName}.jsx`);
        if (!fs.existsSync(filePath)) {
            throw new Error(`View "${viewName}" not found.`);
        }

        const viewComponent = require(filePath);
        return viewComponent(props);
    }

    static wrapHtml(content) {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Dynamic View</title>
            </head>
            <body>
                ${content}
            </body>
            </html>
        `;
    }
}

module.exports = View;
