import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createZone = async (req, res) => {
    const { name, county, constituencies, coordinator, } = req.body;

    try {
        const newZone = await prisma.zone.create({
            data: {
                name,
                county,
                constituencies,
                coordinator,
            },
        });

        res.status(201).json(newZone);
    } catch (error) {
        console.error("Error creating zone:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllZones = async (req, res) => {
    try {
        const zones = await prisma.zone.findMany();

        if (!zones || zones.length === 0) {
            return res.status(404).json({ message: "No zones found" });
        }

        res.status(200).json(zones);
    } catch (error) {
        console.error("Error fetching zones:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateAZone = async (req, res) => {
    const { id } = req.params;
    const { name, county, constituencies, coordinator } = req.body;

    try {
        const updatedZone = await prisma.zone.update({
            where: { id },
            data: {
                name,
                county,
                constituencies,
                coordinator,
            },
        });

        res.status(200).json(updatedZone);
    } catch (error) {
        console.error("Error updating zone:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}