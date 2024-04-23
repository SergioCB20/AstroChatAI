import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/users',authRoutes);
app.use('/messages',messageRoutes);


export default app;