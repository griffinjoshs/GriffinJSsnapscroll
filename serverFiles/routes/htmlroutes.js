// html routes
const path = require("path");

// ROUTES

module.exports = function (app) {
    // INDEX HTML
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    });

    // CREATE Contact HTML
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/contact.html"));
    });

     // CREATE Web Dev HTML
     app.get("/webdev", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/webdev.html"));
    });
    // CREATE Digital Marketing HTML
    app.get("/marketing", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/digitalmarketing.html"));
    });
      // CREATE Hire HTML
      app.get("/hire", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/hire.html"));
    });
};
