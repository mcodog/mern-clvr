import express from "express";
import { getPrice, createPrice, updatePrice, deletePrice } from '../controllers/price.controller.js';

const router = express.Router();

router.get('/', getPrice);
router.post('/', createPrice);
router.put('/:id', updatePrice)
router.delete("/:id", deletePrice)

export default router;