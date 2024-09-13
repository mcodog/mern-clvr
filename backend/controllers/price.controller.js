import Price from "../models/Prices.model.js";
import mongoose from 'mongoose';

export const getPrice = async (request, response) => {
    try {
        const price = await Price.find({});
        response.status(200).json({ success: true, message: "Price Retrieved.", data: price });
    } catch (error) {
        console.log("Error in fetching prices: ", error.message);
        response.status(500).json({ success: false, message: "Server Error."});
    }
};

export const createPrice = async (request, response) => {
    const price = request.body;
    
    if(!price.drink || !price.category || !price.size || !price.temperature || !price.price || !price.cost) {
        return response.status(400).json({ success:false, message:"Please provide all fields."});
    }

    const newPrice = new Price(price);

    try {
        await newPrice.save();
        response.status(201).json({ success:true, data: newPrice});
    } catch (error) {
        console.error("Error in Create Price:", error.message);
        response.status(500).json({ success: false, message: "Server Error: Error in Creating Price."});
    }
}

export const updatePrice = async (request, response) => {
    const { id } = request.params;

    const price = request.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success:false, message: "Invalid Price ID" });
    }

    try {
        const updatedPrice = await Price.findByIdAndUpdate(id, price, {new:true});
        response.status(200).json({ success:true, data:updatedPrice });
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Updating Price."})
    }
}

export const deletePrice = async (request, response) => {
    const { id } = request.params;
    try {
        const result = await Price.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: 'Price not Found.'});
        }

        response.status(200).json({ success: true, message: "Price Deleted." })
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Deleting Price." })
    }
}