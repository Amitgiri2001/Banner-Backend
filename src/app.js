// /src/app.js
import express from 'express';
import bannerRoutes from '../routes/bannerRoutes.js';

const app = express();
app.use(express.json());

// Routes
app.use('/api', bannerRoutes);

export default app;
