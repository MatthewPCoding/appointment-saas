import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// tenant-aware middleware could inspect subdomain or headers
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(process.env.port || 5000))
.catch(err => console.error(err));