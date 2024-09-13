import mongoose from 'mongoose';

const tempSchema = mongoose.Schema({
    tempName: {
        type: String,
        required: true,
        },
    tempDescription: {
        type: String,
        required: true,
        },
    },

    {
        timestamps: true,
    });

    const Temp = mongoose.model('Temp', tempSchema);
    export default Temp;