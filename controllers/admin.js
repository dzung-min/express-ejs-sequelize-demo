import Product from "../models/product.js"

/**
 * @type {import("express").RequestHandler}
 */
export async function getAllProducts(req, res, next) {
  try {
    const products = await Product.findAll()
    res.render("admin/list-products", {
      pageTitle: "Admin",
      path: "/admin",
      products,
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @type {import("express").RequestHandler}
 */
export function getAdminCreate(req, res, next) {
  res.render("admin/create-product", {
    pageTitle: "Admin - Create Product",
    path: "/admin",
  })
}

/**
 * @type {import("express").RequestHandler}
 */
export async function postAdminCreate(req, res, next) {
  try {
    const title = req.body.title
    const imgUrl = req.body.imgUrl
    const price = req.body.price
    const description = req.body.description
    await Product.create({ title, imgUrl, price, description })
    res.redirect("/admin")
  } catch (error) {
    console.log(error)
  }
}
