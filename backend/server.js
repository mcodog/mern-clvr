import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import sizeRoute from './routes/size.route.js'
import tempRoute from './routes/temperature.route.js'
import drinkRoute from './routes/drink.route.js'

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;
const MONGOURI = process.env.MONGO_URI;

app.use('/api/sizes', sizeRoute);
app.use('/api/temp', tempRoute);
app.use('/api/drink', drinkRoute);

app.listen(PORT, () => {
    console.log(`Server is running. Connected to port: ${PORT}`);
    console.log(`Attempting to connect to database: ${MONGOURI}`)
    connectDB(MONGOURI);
})