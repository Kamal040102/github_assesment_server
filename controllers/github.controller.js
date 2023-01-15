const expressAsyncHandler = require("express-async-handler");
const axios = require("axios")

const getGithubProfile = expressAsyncHandler(async (req, res) => {
    const { user } = req.query;
    try {
        if (!user || user.length === 0) {
            res.status(400).json({
                status: false,
                message: "Query parameter 'user' missing, please include it and try again."
            })
        }

        try {
            let data = await axios.get(`https://api.github.com/users/${user}`)

            res.json({
                status: true,
                data: data.data
            })
        }
        catch (err) {
            res.status(404).json({
                status: false,
                message: "User not found"
            })
        }
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
        if (!user || user.length === 0) {
            res.status(400).json({
                status: false,
                message: "Query parameter 'user' missing, please include it and try again."
            })
        }

        const repoData = [];

        try {
            let data = [];
            let page = 1;
            do {
                data = await axios.get(`https://api.github.com/users/${user}/repos?per_page=100&page=${page}`)
                page++;
                repoData.push(...data.data)
            } while (data.data.length === 100)

            res.json({
                status: true,
                data: repoData
            })
        }
        catch (err) {
            res.status(404).json({
                status: false,
                message: err.message || "User not found"
            })
        }

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