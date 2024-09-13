import Size from "../models/Size.model.js";
import mongoose from 'mongoose';

export const getSize = async (request, response) => {
    try {
        const size = await Size.find({});
        response.status(200).json({ success: true, message: "Sizes Retrieved.", data: size });
    } catch (error) {
        console.log("Error in fetching sizes: ", error.message);
        response.status(500).json({ success: false, message: "Server Error."});
    }
};

export const createSize = async (request, response) => {
    const size = request.body;
    
    if(!size.sizeName || !size.sizeDescription) {
        return response.status(400).json({ success:false, message:"Please provide all fields."});
    }

    const newSize = new Size(size);

    try {
        await newSize.save();
        response.status(201).json({ success:true, data: newSize});
    } catch (error) {
        console.error("Error in Create Size:", error.message);
        response.status(500).json({ success: false, message: "Server Error: Error in Creating Size."});
    }
}

export const updateSize = async (request, response) => {
    const { id } = request.params;

    const size = request.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success:false, message: "Invalid Size ID" });
    }

    try {
        const updatedSize = await Size.findByIdAndUpdate(id, size, {new:true});
        response.status(200).json({ success:true, data:updatedSize });
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Updating Size."})
    }
}

export const deleteSize = async (request, response) => {
    const { id } = request.params;
    try {
        const result = await Size.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: 'Size not Found.'});
        }

        response.status(200).json({ success: true, message: "Size Deleted." })
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Deleting Size." })
    }
}