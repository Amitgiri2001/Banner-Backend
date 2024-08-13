// /src/app.js
import express from 'express';
import bannerRoutes from '../routes/bannerRoutes.js';
import cors from 'cors';

const app = express();

// app.use(cors());
// app.use(cors({ origin: 'http://ec2-43-205-255-15.ap-south-1.compute.amazonaws.com' }));
// Array of allowed origins
const allowedOrigins = [
    'http://localhost:3000',
    'http://ec2-43-205-255-15.ap-south-1.compute.amazonaws.com',
    'http://ec2-43-205-255-15.ap-south-1.compute.amazonaws.com/dashboard',
    'https://banner-fronend-m4e8-git-master-amitgiri2001s-projects.vercel.app'
];

// CORS configuration
const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl requests, etc.)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', bannerRoutes);

export default app;
