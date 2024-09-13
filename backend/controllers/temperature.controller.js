import Temp from "../models/Temperature.model.js";
import mongoose from 'mongoose';

export const getTemp = async (request, response) => {
    try {
        const temp = await Temp.find({});
        response.status(200).json({ success: true, message: "Temperatures Retrieved.", data: temp });
    } catch (error) {
        console.log("Error in fetching temperatures: ", error.message);
        response.status(500).json({ success: false, message: "Server Error."});
    }
};

export const createTemp = async (request, response) => {
    const temp = request.body;
    
    if(!temp.tempName || !temp.tempDescription) {
        return response.status(400).json({ success:false, message:"Please provide all fields."});
    }

    const newTemp = new Temp(temp);

    try {
        await newTemp.save();
        response.status(201).json({ success:true, data: newTemp});
    } catch (error) {
        console.error("Error in Create Temperature:", error.message);
        response.status(500).json({ success: false, message: "Server Error: Error in Creating Temperature."});
    }
}

export const updateTemp = async (request, response) => {
    const { id } = request.params;

    const temp = request.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success:false, message: "Invalid Temperature ID" });
    }

    try {
        const updatedTemp = await Temp.findByIdAndUpdate(id, temp, {new:true});
        response.status(200).json({ success:true, data:updatedTemp });
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Updating Temperature."})
    }
}

export const deleteTemp = async (request, response) => {
    const { id } = request.params;
    try {
        const result = await Temp.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: 'Temperature not Found.'});
        }

        response.status(200).json({ success: true, message: "Temperature Deleted." })
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Deleting Temperature." })
    }
}