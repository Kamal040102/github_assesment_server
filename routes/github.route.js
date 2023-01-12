const githubRouter = require("express").Router()
const expressAsyncHandler = require("express-async-handler")
const { getGithubProfile, getUserRepo } = require("../controllers/github.controller")

githubRouter.get("/", getGithubProfile)
githubRouter.get("/repos", getUserRepo)

module.exports = githubRouter;