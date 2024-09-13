import mongoose from 'mongoose';

const drinkSchema = mongoose.Schema({
    drinkName: {
        type: String,
        required: true,
        },
    drinkDescription: {
        type: String,
        required: true,
        },
    },

    {
        timestamps: true,
    });

    const Drink = mongoose.model('Drink', drinkSchema);
    export default Drink;