import express from "express";
import createError from "http-errors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

import AnnonceValidator from "../../validators/AnnoncesValidator.js";
import EquipementValidator from "../../validators/EquipementValidator.js";
import TypeBienValidator from "../../validators/TypeBienValidator.js";
import VilleValidator from "../../validators/VilleValidator.js";

dotenv.config();

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const prisma = new PrismaClient();

// POST routes
router.post("/announcements", async (req, res, next) => {
  try {
    console.log("Data received:", req.body);
    const validatedData = AnnonceValidator.parse(req.body);
    const announcement = await prisma.annonce.create({ data: validatedData });
    res.status(201).json(announcement);
  } catch (error) {
    console.error("Error creating announcement:", error);
    if (error.name === "ValidationError") {
      next(createError(400, `Validation Error: ${error.message}`));
    } else if (error.code === "P2003") {
      next(
        createError(
          400,
          `Foreign Key Constraint Violation: ${error.meta.field_name}`
        )
      );
    } else {
      next(createError(500, `Internal Server Error: ${error.message}`));
    }
  }
});

router.post("/equipments", async (req, res, next) => {
  try {
    const validatedData = EquipementValidator.parse(req.body);
    const equipment = await prisma.equipement.create({ data: validatedData });
    res.status(201).json(equipment);
  } catch (error) {
    if (error.name === "ValidationError") {
      next(createError(400, `Validation Error: ${error.message}`));
    } else {
      next(createError(500, `Internal Server Error: ${error.message}`));
    }
  }
});

router.post("/property-types", async (req, res, next) => {
  try {
    const validatedData = TypeBienValidator.parse(req.body);
    const propertyType = await prisma.typeBien.create({ data: validatedData });
    res.status(201).json(propertyType);
  } catch (error) {
    if (error.name === "ValidationError") {
      next(createError(400, `Validation Error: ${error.message}`));
    } else {
      next(createError(500, `Internal Server Error: ${error.message}`));
    }
  }
});

router.post("/cities", async (req, res, next) => {
  try {
    const validatedData = VilleValidator.parse(req.body);
    const city = await prisma.ville.create({ data: validatedData });
    res.status(201).json(city);
  } catch (error) {
    if (error.name === "ValidationError") {
      next(createError(400, `Validation Error: ${error.message}`));
    } else {
      next(createError(500, `Internal Server Error: ${error.message}`));
    }
  }
});

router.get("/announcements", async (req, res, next) => {
  try {
    const announcements = await prisma.annonce.findMany();
    res.status(200).json(announcements);
  } catch (error) {
    next(createError(500, `Internal Server Error: ${error.message}`));
  }
});

router.get("/announcements/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const announcement = await prisma.annonce.findUnique({
      where: { id: parseInt(id) },
    });
    if (!announcement) {
      next(createError(404, `Announcement with ID ${id} not found`));
    } else {
      res.status(200).json(announcement);
    }
  } catch (error) {
    next(createError(500, `Internal Server Error: ${error.message}`));
  }
});

router.get("/equipments", async (req, res, next) => {
  try {
    const equipments = await prisma.equipement.findMany();
    res.status(200).json(equipments);
  } catch (error) {
    next(createError(500, `Internal Server Error: ${error.message}`));
  }
});

router.get("/property-types", async (req, res, next) => {
  try {
    const propertyTypes = await prisma.typeBien.findMany();
    res.status(200).json(propertyTypes);
  } catch (error) {
    next(createError(500, `Internal Server Error: ${error.message}`));
  }
});

router.get("/cities", async (req, res, next) => {
  try {
    const cities = await prisma.ville.findMany();
    res.status(200).json(cities);
  } catch (error) {
    next(createError(500, `Internal Server Error: ${error.message}`));
  }
});

router.get("/search", async (req, res) => {
  try {
    const { city, propertyType } = req.query;

    const filters = {};


    if (city) {
      const ville = await prisma.ville.findFirst({ where: { nom: city } });
      if (ville) {
        filters.villeId = ville.id;
      } else {
        return res.status(404).json({ error: `Ville '${city}' introuvable.` });
      }
    }


    if (propertyType) {
      const typeBien = await prisma.typeBien.findFirst({
        where: { nom: propertyType },
      });
      if (typeBien) {
        filters.type_bienId = typeBien.id;
      } else {
        return res
          .status(404)
          .json({ error: `Type de bien '${propertyType}' introuvable.` });
      }
    }

    const annonces = await prisma.annonce.findMany({
      where: {
        ...filters,
      },
      include: {
        ville: true,
        type_bien: true,
        equipements: false,
      },
    });
    if (annonces.length === 0) {
      return res
        .status(404)
        .json({ error: "Aucune annonce trouvée pour ces critères." });
    }

    res.json(annonces);
  } catch (error) {
    console.error("Erreur lors de la recherche:", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});


export default router;
