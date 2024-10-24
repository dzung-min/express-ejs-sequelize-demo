import { Router } from "express"

import {
  getAdminCreate,
  getAllProducts,
  postAdminCreate,
} from "../controllers/admin.js"

const router = Router()

router.get("/", getAllProducts)
router.get("/create", getAdminCreate)
router.post("/create", postAdminCreate)

export default router
