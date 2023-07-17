import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from './db/index';
import dotenv from 'dotenv';
import router from './routes';
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const dbUrl = process.env.DB_URL;
connectDB(dbUrl);

app.use(router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

