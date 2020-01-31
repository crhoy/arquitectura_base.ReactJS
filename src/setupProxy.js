const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        proxy('/api/*', {target: 'http://host.jsdev.crhoy.net:5200'})
    );
}