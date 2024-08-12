// /controllers/bannerController.js
import { getBanner, updateBanner, createBanner, toggleBannerVisibility } from '../models/db.js';

export const fetchBanner = async (req, res) => {
    try {
        const banner = await getBanner();
        res.json(banner);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch banner' });
    }
};

export const modifyBanner = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Id" + id);
        const data = req.body;
        const updatedBanner = await updateBanner(parseInt(id), data);
        res.json(updatedBanner);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update banner' });
    }
};

export const addBanner = async (req, res) => {
    try {
        const data = req.body;
        const newBanner = await createBanner(data);
        res.json(newBanner);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create banner' });
    }
};

export const changeBannerVisibility = async (req, res) => {
    try {
        const { id } = req.params;
        const { isVisible } = req.body;
        const updatedBanner = await toggleBannerVisibility(parseInt(id), isVisible);
        res.json(updatedBanner);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update banner visibility' });
    }
};
