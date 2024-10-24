import { Router } from "express"

import {
  getAdminCreate,
  getAllProducts,
  getEditProduct,
  postAdminCreate,
  postEditProduct,
} from "../controllers/admin.js"

const router = Router()

router.get("/", getAllProducts)
router.get("/create", getAdminCreate)
router.post("/create", postAdminCreate)
router.get("/edit/:id", getEditProduct)
router.post("/edit", postEditProduct)

export default router
