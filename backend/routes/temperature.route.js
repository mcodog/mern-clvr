import express from "express";
import mongoose from "mongoose";
import Temp from '../models/Temperature.model.js';
import { getTemp, createTemp, updateTemp, deleteTemp } from '../controllers/temperature.controller.js';

const router = express.Router();

router.get('/', getTemp);
router.post('/', createTemp);
router.put('/:id', updateTemp)
router.delete("/:id", deleteTemp)

export default router;
