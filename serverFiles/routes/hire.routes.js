const hireController = require("../controllers/hire.controller");

module.exports = function (app) {
    app.post('/api/hire', hireController.newSubscriber)
}