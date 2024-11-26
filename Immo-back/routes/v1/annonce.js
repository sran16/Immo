import express from "express";
import createError from "http-errors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import AgentValidator from "../../validators/AgentValidator.js";
import {
  AnnonceValidator,
  EquipementValidator,
  VilleValidator,
  TypeBienValidator,
} from "../../validators/AnnoncesValidator.js"; 

dotenv.config();

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const prisma = new PrismaClient();

// Route pour créer une annonce
router.post("/create", async (req, res, next) => {
    try {
        const annonceData = AnnonceValidator.parse(req.body); 
        const annonce = await prisma.annonce.create({
            data: {
                ...annonceData,
                equipements: annonceData.equipements
                    ? { connect: annonceData.equipements.map((e) => ({ id: e.id })) }
                    : undefined,
                ville: annonceData.ville
                    ? { connect: { id: annonceData.ville.id } }
                    : undefined,
                type_bien: annonceData.type_bien
                    ? { connect: { id: annonceData.type_bien.id } }
                    : undefined,
            },
        });
        res.json(annonce);
    } catch (error) {
        next(createError(400, error.message || error.errors));
    }
});


// Route pour obtenir toutes les annonces
router.get("/all", async (req, res, next) => {
  try {
    const annonces = await prisma.annonce.findMany();
    res.json(annonces);
  } catch (error) {
    next(createError(500, "Erreur lors de la récupération des annonces"));
  }
});

// Route pour obtenir une annonce par ID
router.get("/all/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const annonce = await prisma.annonce.findUnique({
      where: { id: parseInt(id) },
    });
    if (!annonce) throw createError(404, "Annonce non trouvée");
    res.json(annonce);
  } catch (error) {
    next(createError(400, error.message || error.errors));
  }
});

// Route pour mettre à jour une annonce
router.put("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const annonceData = AnnonceValidator.parse(req.body); // Validation
    const updatedAnnonce = await prisma.annonce.update({
      where: { id: parseInt(id) },
      data: {
        ...annonceData,
        equipements: annonceData.equipements
          ? { connect: annonceData.equipements.map((e) => ({ id: e.id })) }
          : undefined,
        ville: annonceData.ville
          ? { connect: { id: annonceData.ville.id } }
          : undefined,
        type_bien: annonceData.type_bien
          ? { connect: { id: annonceData.type_bien.id } }
          : undefined,
      },
    });
    res.json(updatedAnnonce);
  } catch (error) {
    next(createError(400, error.message || error.errors));
  }
});

// Route pour supprimer une annonce
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.annonce.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Annonce supprimée avec succès" });
  } catch (error) {
    next(createError(400, error.message || error.errors));
  }
});

// Route pour récupérer les équipements
router.get("/equipements", async (req, res, next) => {
  try {
    const equipements = await prisma.equipement.findMany();
    res.json(equipements);
  } catch (error) {
    next(createError(500, "Erreur lors de la récupération des équipements"));
  }
});

// Route pour créer un équipement
router.post("/equipements/create", async (req, res, next) => {
  try {
    const equipementData = EquipementValidator.parse(req.body); // Validation spécifique
    const equipement = await prisma.equipement.create({
      data: equipementData,
    });
    res.json(equipement);
  } catch (error) {
    next(createError(400, error.message || error.errors));
  }
});

// Route pour créer un type de bien
router.post("/type_bien/create", async (req, res, next) => {
  try {
    const typeBienData = TypeBienValidator.parse(req.body);
    const type_bien = await prisma.type_bien.create({
      data: typeBienData,
    });
    res.json(type_bien);
  } catch (error) {
    next(createError(400, error.message || error.errors));
  }
});

// Route pour récupérer les types de biens
router.get("/type_bien", async (req, res, next) => {
  try {
    const type_biens = await prisma.type_bien.findMany();
    res.json(type_biens);
  } catch (error) {
    next(createError(500, "Erreur lors de la récupération des types de biens"));
  }
});

// Route pour créer un agent
router.post("/agents/create", async (req, res, next) => {
  try {
    const agentData = AgentValidator.parse(req.body);
    const agent = await prisma.agent.create({
      data: agentData,
    });
    res.json(agent);
  } catch (error) {
    next(createError(400, error.message || error.errors));
  }
});

// Route pour récupérer tous les agents
router.get("/agents", async (req, res, next) => {
  try {
    const agents = await prisma.agent.findMany();
    res.json(agents);
  } catch (error) {
    next(createError(500, "Erreur lors de la récupération des agents"));
  }
});

// Route pour créer une ville
router.post("/ville/create", async (req, res, next) => {
  try {
    const villeData = VilleValidator.parse(req.body);
    const ville = await prisma.ville.create({
      data: villeData,
    });
    res.json(ville);
  } catch (error) {
    next(createError(400, error.message || error.errors));
  }
});

// Route pour récupérer toutes les villes
router.get("/ville", async (req, res, next) => {
  try {
    const villes = await prisma.ville.findMany();
    res.json(villes);
  } catch (error) {
    next(createError(500, "Erreur lors de la récupération des villes"));
  }
});

export default router;
