import express from "express"
import remaindersRouter from "./routers/remainder"

const app = express()

app.use(express.json())

app.use("/remainders", remaindersRouter)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(8000, () => {
  console.log("Server Started")
})
