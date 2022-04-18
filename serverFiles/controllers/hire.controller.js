const { Inquiry } = require("../models/hire.model");

module.exports = {
  index: (request, response) => {
    response.json({ message: "Backend Server Running" });
  },
  newSubscriber: (request, response) => {
      console.log("new subscriber", request.body)
      Inquiry.create(
      request.body)
      .then((newSub) =>
        response.json({ message: "success", results: newSub })
      )
      .catch((error) => response.json({ message: "error", results: error }));
  },
};
