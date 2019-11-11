const api = require("express").Router();
const auth = require("../../controllers/AuthController");
const requestValidator = require("../../middlewares/requestValidator");
const registerRequestSchema = require("../../rules/request/RegisterSchema");
const loginRequestSchema = require("../../rules/request/LoginSchema");

api.post("/login", requestValidator(loginRequestSchema), auth.login);
api.post("/register", requestValidator(registerRequestSchema), auth.register);
module.exports = api;
