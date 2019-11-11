const express = require("express");
const auth = require("../controllers/AuthController");
const viewsRoutes = require("./views");

const router = express.Router();

module.exports = () => {
  router.post("/authorize", auth.generateToken);
  viewsRoutes(router);
  return router;
};
