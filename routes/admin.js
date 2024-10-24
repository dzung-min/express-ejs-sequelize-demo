import { Router } from "express"

import {
  getAdminCreate,
  getAllProducts,
  getEditProduct,
  postAdminCreate,
  postDeleteProduct,
  postEditProduct,
} from "../controllers/admin.js"

const router = Router()

router.get("/", getAllProducts)
router.get("/create", getAdminCreate)
router.post("/create", postAdminCreate)
router.get("/edit/:id", getEditProduct)
router.post("/edit", postEditProduct)
router.post("/delete-product", postDeleteProduct)

export default router
