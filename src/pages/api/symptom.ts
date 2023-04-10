import { prisma } from "@/helpers/storage/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const symptom = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "GET") {
    const pins = await prisma.user.findMany();
    res.status(200).json(pins);
  } else if (req.method === "POST") {
    const pin = await prisma.user.create({ data: JSON.parse(req.body) });
    res.status(201).json(pin);
  }
  await prisma.$disconnect();
};

export default symptom;
