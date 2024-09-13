import express from "express";
import { getDrink, createDrink, updateDrink, deleteDrink } from '../controllers/drink.controller.js';

const router = express.Router();

router.get('/', getDrink);
router.post('/', createDrink);
router.put('/:id', updateDrink)
router.delete("/:id", deleteDrink)

export default router;
