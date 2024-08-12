// /src/app.js
import express from 'express';
import bannerRoutes from '../routes/bannerRoutes.js';
import cors from 'cors';

const app = express();

// app.use(cors());
app.use(cors({ origin: 'https://banner-fronend-m4e8.vercel.app/' }));
app.use(express.json());

// Routes
app.use('/api', bannerRoutes);

export default app;
