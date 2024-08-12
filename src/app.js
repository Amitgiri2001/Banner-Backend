// /src/app.js
import express from 'express';
import bannerRoutes from '../routes/bannerRoutes.js';
import cors from 'cors';

const app = express();

// app.use(cors());
app.use(cors({ origin: 'http://ec2-43-205-255-15.ap-south-1.compute.amazonaws.com/' }));
app.use(express.json());

// Routes
app.use('/api', bannerRoutes);

export default app;
