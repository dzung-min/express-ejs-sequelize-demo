import express from "express"
import logger from "morgan"
import dotenv from "dotenv"
import ejsLayout from "express-ejs-layouts"

import productsRouter from "./routes/products.js"
import adminRouter from "./routes/admin.js"

import sequelize from "./utils/database.js"
import Product from "./models/product.js"

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.set("view engine", "ejs")
app.use(ejsLayout)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger("dev"))

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Home", path: "/" })
})

app.use("/products", productsRouter)
app.use("/admin", adminRouter)

async function bootstrap() {
  try {
    await sequelize.sync()
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

bootstrap()
