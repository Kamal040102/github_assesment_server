const express = require("express")
require("dotenv").config()
const morgan = require("morgan")
const expressAsyncHandler = require("express-async-handler")
require("./utils/databaseConnection")
const githubRouter = require('./routes/github.route')

const app = express()

app.use(express.json())
app.use(morgan('combined'))

app.get("/api/v1/", expressAsyncHandler((req, res) => {
    res.status(200).json({
        status: true,
        message: "The server is live."
    })
}))

app.use("/api/v1/github", githubRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is live on ${process.env.SERVER_URI}:${PORT}`)
})