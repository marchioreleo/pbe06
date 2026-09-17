const express = require("express")
const router = express.Router()

const {create, list} = require("./controller")

router.post("/bens",create)
router.get("/bens",list)

module.exports = router