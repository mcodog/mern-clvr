import mongoose from 'mongoose';

const sizeSchema = mongoose.Schema({
    sizeName: {
        type: String,
        required: true,
        },
    sizeDescription: {
        type: String,
        required: true,
        },
    },

    {
        timestamps: true,
    });

    const Size = mongoose.model('Size', sizeSchema);
    export default Size;