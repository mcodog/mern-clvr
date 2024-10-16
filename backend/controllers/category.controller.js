import Category from "../models/Category.model.js";
import mongoose from 'mongoose';

export const getCategory = async (request, response) => {
    try {
        const category = await Category.find({});
        response.status(200).json({ success: true, message: "Category Retrieved.", data: category });
    } catch (error) {
        console.log("Error in fetching categories: ", error.message);
        response.status(500).json({ success: false, message: "Server Error."});
    }
};

export const createCategory = async (request, response) => {
    const category = request.body;
    
    if(!category.categoryName || !category.categoryDescription) {
        return response.status(400).json({ success:false, message:"Please provide all fields."});
    }

    const newCategory = new Category(category);

    try {
        await newCategory.save();
        response.status(201).json({ success:true, data: newCategory});
    } catch (error) {
        console.error("Error in Create Category:", error.message);
        response.status(500).json({ success: false, message: "Server Error: Error in Creating Category."});
    }
}

export const updateCategory = async (request, response) => {
    const { id } = request.params;

    const category = request.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success:false, message: "Invalid Category ID" });
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, category, {new:true});
        response.status(200).json({ success:true, data:updatedCategory });
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Updating Category."})
    }
}

export const deleteCategory = async (request, response) => {
    const { id } = request.params;
    try {
        const result = await Category.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: 'Category not Found.'});
        }

        response.status(200).json({ success: true, message: "Category Deleted." })
    } catch (error) {
        response.status(500).json({ success: false, message: "Server Error: Error in Deleting Category." })
    }
}