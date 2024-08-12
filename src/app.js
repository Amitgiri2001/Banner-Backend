// /src/app.js
import express from 'express';
import bannerRoutes from '../routes/bannerRoutes.js';

const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://your-frontend-domain.com', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // If you need to send cookies or authentication headers
}));
app.use(express.json());

// Routes
app.use('/api', bannerRoutes);

export default app;
