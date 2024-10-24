import Product from "../models/product.js"

/**
 * @type {import("express").RequestHandler}
 */
export async function getAllProducts(req, res, next) {
  try {
    const products = await Product.findAll()
    res.render("products/list-products", {
      pageTitle: "Products",
      path: "/products",
      products,
    })
  } catch (error) {
    console.log(error)
  }
}
