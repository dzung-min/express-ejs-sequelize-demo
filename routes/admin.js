import { Router } from "express"

import {
  getAdminCreate,
  getAllProducts,
  getEditProduct,
  postAdminCreate,
} from "../controllers/admin.js"

const router = Router()

router.get("/", getAllProducts)
router.get("/create", getAdminCreate)
router.post("/create", postAdminCreate)
router.get("/edit/:id", getEditProduct)

export default router
