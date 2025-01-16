function Error(props) {
    return `
        <div style="text-align: center; padding: 50px;">
            <h1 style="color: red;">Error</h1>
            <p>${props.message}</p>
        </div>
    `;
}

module.exports = Error;
