import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import testRoute from './routes/test.js';

const app = express();
dotenv.config();


//json parser, limit set to 30 MB for image transfer
app.use(express.json({
    limit: "30mb", extended: true
}));

app.use(express.urlencoded({
    limit: "30mb", extended: true
}));

app.use(cors());

// specify /test for specific routes
app.use('/test', testRoute);

//Setting up env variables:
//Create server/.env (filename = .env)
//Refer server/.env.example for sample file

//Server PORT number
const PORT = process.env.PORT;

//Connecting to the database
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`) ))
.catch((error) => console.log(error.message));

//To waive off warnings
mongoose.set('useFindAndModify', false);