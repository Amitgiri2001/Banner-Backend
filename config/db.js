import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBanner = async () => {
    return await prisma.banner.findFirst();
};

export const updateBanner = async (id, data) => {
    return await prisma.banner.update({
        where: { id: id },
        data: data,
    });
};

export const createBanner = async (data) => {
    return await prisma.banner.create({
        data: data,
    });
};

export const toggleBannerVisibility = async (id, isVisible) => {
    return await prisma.banner.update({
        where: { id: id },
        data: { isVisible: isVisible },
    });
};
