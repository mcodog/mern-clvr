import mongoose from 'mongoose';
const { Schema } = mongoose;

const priceSchema = mongoose.Schema({
    drink:[
        {type: Schema.Types.ObjectId, ref: 'Drink', required:true}
      ],
    category:[
        {type: Schema.Types.ObjectId, ref: 'Category', required:true}
      ],
    size:[
        {type: Schema.Types.ObjectId, ref: 'Size', required:true}
      ],
    temperature:[
        {type: Schema.Types.ObjectId, ref: 'Temperature', required:true}
      ],
    price: {
        type: Number, 
        required: true, 
        },
    cost: {
        type: Number, 
        required: true, 
        }
    },
    {
        timestamps: true,
    });

    const Price = mongoose.model('Price', priceSchema);
    export default Price;