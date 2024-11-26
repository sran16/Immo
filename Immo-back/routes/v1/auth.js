import express from "express";
import createError from "http-errors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import AgentValidator from "../../validators/AgentValidator.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const prisma = new PrismaClient();

router.post("/register", async (req, res, next) => {
  try {
    const agentData = AgentValidator.parse(req.body);
    const hashedPassword = await bcrypt.hash(agentData.password, 10);
    const agent = await prisma.agent.create({
      data: {
        ...agentData,
        password: hashedPassword,
      },
    });
    res.json(agent);
  } catch (error) {
    next(createError(400, error.message || error.errors));
  }
});

router.get("/agents", async (req, res, next) => {
  try {
    const agents = await prisma.agent.findMany();
    res.json(agents);
  } catch (error) {
    next(createError(500, "Erreur lors de la récupération des agents"));
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { badge_number, password } = req.body;
    const agent = await prisma.agent.findUnique({
      where: { badge_number },
    });

    if (!agent) {
      return next(createError(401, "Badge number or password incorrect"));
    }

    const isPasswordValid = await bcrypt.compare(password, agent.password);
    if (!isPasswordValid) {
      return next(createError(401, "Badge number or password incorrect"));
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    next(createError(500, "Error during login"));
  }
});

export default router;
