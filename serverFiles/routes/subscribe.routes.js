const subscribeController = require("../controllers/subscribe.controller");

module.exports = function (app) {
    app.get('/api', subscribeController.index)
    console.log('routeFile')
    app.post('/api/subscribe', subscribeController.newSubscriber)
}