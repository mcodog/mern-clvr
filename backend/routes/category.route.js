import express from "express";
import { getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/category.controller.js';

const router = express.Router();

router.get('/', getCategory);
router.post('/', createCategory);
router.put('/:id', updateCategory)
router.delete("/:id", deleteCategory)

export default router;
