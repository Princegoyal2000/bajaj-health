const { Router } = require("express");
const UserController = require("../controller/userController");
const router = Router();

// USER DETAILS
router.post("/bfhl", UserController.getUserDetails);

module.exports = (app) => {
  app.use(`/`, router);
};
