const expressAsyncHandler = require("express-async-handler");
const axios = require("axios")

const getGithubProfile = expressAsyncHandler(async (req, res) => {
    const { user } = req.query;
    try {
        let data = await axios.get(`https://api.github.com/users/${user}`)

        res.json({
            status: true,
            data: data.data
        })
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message || "Internal Server Error"
        })
    }
})

const getUserRepo = expressAsyncHandler(async (req, res) => {
    const { user } = req.query
    try {
        let data = await axios.get(`https://api.github.com/users/${user}/repos`)

        res.json({
            status: true,
            data: data.data
        })
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message || "Internal server error"
        })
    }
})

module.exports = {
    getGithubProfile,
    getUserRepo
}