import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";

const prisma = new PrismaClient();

export const createTpPeriod = async (req, res) => {
  const { startDate, endDate } = req.body;
  console.log("Creating TP period with data:", req.body);

  try {
    const newTpPeriod = await prisma.tpPeriod.create({
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    res.status(201).json(newTpPeriod);
  } catch (error) {
    console.error("Error creating TP period:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getTpPeriod = async (req, res) => {
  try {
    const periods = await prisma.tpPeriod.findMany({
      orderBy: {
        startDate: 'asc',
      },
    });
	
    const formatted = periods.map((p) => ({
      ...p,
      startDate: format(p.startDate, 'yyyy-MM-dd'),
      endDate: format(p.endDate, 'yyyy-MM-dd'),
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error("Error fetching TP periods:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
