import express from "express";
import mongoose from "mongoose";
import Size from '../models/Size.model.js';
import { getSize, createSize, updateSize, deleteSize } from '../controllers/size.controller.js';

const router = express.Router();

router.get('/', getSize);
router.post('/', createSize);
router.put('/:id', updateSize)
router.delete("/:id", deleteSize)

export default router;
