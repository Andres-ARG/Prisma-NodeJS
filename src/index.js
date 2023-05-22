import express from "express"
import categoriesRoutes from "./routes/categories.routes.js"
import productsRoutes from "./routes/products.routes.js"

const app = express()

app.use(express.json())


app.listen(3000)
/* ROUTES */
app.use("/api", productsRoutes)
app.use("/api", categoriesRoutes)



/* */
console.log("Server on port", 3000)