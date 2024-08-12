import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all banners

export const createBanner = async (data) => {
    return await prisma.banner.create({
        data: data
    })
}
export const getAllBanners = async () => {
    return await prisma.banner.findMany();
};

// Get a single banner by ID
export const getOneBanner = async (id) => {
    return await prisma.banner.findUnique({
        where: { id: parseInt(id) },
    });
};

// Update a banner by ID
export const updateBanner = async (id, data) => {
    return await prisma.banner.update({
        where: { id: parseInt(id) },
        data: data,
    });
};

// Delete a banner by ID
export const deleteBanner = async (id) => {
    return await prisma.banner.delete({
        where: { id: parseInt(id) },
    });
};

// Expire a banner by setting isExpired to true
export const expireBanner = async (id) => {
    return await prisma.banner.update({
        where: { id: parseInt(id) },
        data: { isExpired: true },
    });
};
