import express from 'express';
import {
    createBanner,
    getAllBanners,
    getOneBanner,
    updateBanner,
    deleteBanner,
    expireBanner,

} from '../models/db.js';

const router = express.Router();

//create banner
router.post('/banners', async (req, res) => {
    try {
        const data = req.body; // Extract data from the request body
        data.endDateAndTime = new Date(req.body.endDateAndTime);
        console.log(data)
        const banner = await createBanner(data); // Pass the data to createBanner function
        res.status(201).json(banner);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create banner' });
    }
});


// Get all banners
router.get('/banners', async (req, res) => {
    try {
        const banners = await getAllBanners();
        res.status(200).json(banners);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch banners' });
    }
});

// Get a single banner by ID
router.get('/banners/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const banner = await getOneBanner(id);
        res.status(200).json(banner);
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch banner with ID ${id}` });
    }
});

// Update a banner by ID
router.put('/banners/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        // console.log(data)
        if (data.endDateAndTime)
            data.endDateAndTime = new Date(data.endDateAndTime);
        // console.log(data.endDateAndTime)
        const updatedBanner = await updateBanner(id, data);
        res.status(200).json(updatedBanner);
    } catch (error) {
        res.status(500).json({ error: `Failed to update banner` });
    }
});

// Delete a banner by ID
router.delete('/banners/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteBanner(id);
        res.status(200).json({ message: `Banner with ID ${id} deleted successfully` });
    } catch (error) {
        res.status(500).json({ error: `Failed to delete banner with ID ${id}` });
    }
});

// Expire a banner by setting isExpired to true
router.patch('/banners/:id/expire', async (req, res) => {
    try {
        const { id } = req.params;
        const expiredBanner = await expireBanner(id);
        res.json(expiredBanner);
    } catch (error) {
        res.status(500).json({ error: `Failed to expire banner.` });
    }
});

export default router;
