import { Router } from "express"

import createRemainderDto from "../dtos/create-remainder"
import Remainder from "../models/remainder"

const router = Router()

const remainders: Remainder[] = []

router.get("/", (req, res) => {
  res.status(200).json(remainders)
})

router.post("/", (req, res) => {
  const { title } = req.body as createRemainderDto
  const remainder = new Remainder(title)
  remainders.push(remainder)
  res.status(201).json(remainder)
})

export default router
