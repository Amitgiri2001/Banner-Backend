import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.banner.create({
        data: {
            title: 'Welcome Offer',
            description: 'Get 50% off on your first purchase!',
            endDateAndTime: new Date('2024-12-31T23:59:59'),
            startDate: new Date(),
            isExpired: false,
            isVisible: true,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdxTNQAGO5MWiwpjkRsF4Nz2CRo6CV9j4aQzmglQ5zgsGhKiA/viewform"
        },
    });

    await prisma.banner.create({
        data: {
            title: 'Holiday Sale',
            description: 'Up to 70% off on all items during the holiday season!',
            endDateAndTime: new Date('2024-12-25T23:59:59'),
            startDate: new Date(),
            isExpired: false,
            isVisible: true,
            link: "https://www.youtube.com/"
        },
    });

    await prisma.banner.create({
        data: {
            title: 'Summer Special',
            description: 'Cool down with our summer discounts!',
            endDateAndTime: new Date('2024-08-31T23:59:59'),
            startDate: new Date(),
            isExpired: false,
            isVisible: true,
            link: "https://www.youtube.com/"
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
