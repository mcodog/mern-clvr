import Drink from "../models/Drink.model.js";
import mongoose from 'mongoose';

export const getDrink = async (request, response) => {
    try {
        const drink = await Drink.find({});
        response.status(200).json({ success: true, message: "Drinks Retrieved.", data: drink });
    } catch (error) {
        console.log("Error in fetching drinks: ", error.message);
        response.status(500).json({ success: false, message: "Server Error."});
    }
};

export const createDrink = async (request, response) => {
    const drink = request.body;
    
    if(!drink.drinkName || !drink.drinkDescription) {
        return response.status(400).json({ success:false, message:"Please provide all fields."});
    }

    const newDrink = new Drink(drink);

    try {
        await newDrink.save();
        response.status(201).json({ success:true, data: newDrink});
    } catch (error) {
        console.error("Error in Create Size:", error.message);
        response.status(500).json({ success: false, message: "Server Error: Error in Creating Drink."});
    }
}

export const updateDrink = async (request, response) => {
    const { id } = request.params;

    const drink = request.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success:false, message: "Invalid Drink ID" });
    }

    try {
        const updatedDrink = await Drink.findByIdAndUpdate(id, drink, {new:true});
        response.status(200).json({ success:true, data:updatedDrink });
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Updating Drink."})
    }
}

export const deleteDrink = async (request, response) => {
    const { id } = request.params;
    try {
        const result = await Drink.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: 'Drink not Found.'});
        }

        response.status(200).json({ success: true, message: "Drink Deleted." })
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Deleting Drink." })
    }
}