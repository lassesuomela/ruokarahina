const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

const port = 8080

const app = express()
app.use(cors())

app.use(helmet())
app.use(express.json())
app.use(morgan("dev"))

app.listen(port, "0.0.0.0", () => {
    console.log(`Listening at http://localhost:${port}`)
})
