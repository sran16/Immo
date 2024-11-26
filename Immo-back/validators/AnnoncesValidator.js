import { z } from "zod";

const AnnonceValidator = z.object({
  id: z.number().optional(),
  titre: z.string(),
  description: z.string(),
  prix: z.number(),
  date_publication: z.date().optional().default(new Date()),
  type_bienId: z.number(),
  nombre_pieces: z.number(),
  nombre_chambres: z.number(),
  nombre_salles_bain: z.number(),
  surface: z.number(),
  meuble: z.string(),
  villeId: z.number(),
  nom_vendeur: z.string(),
  img_bien: z.string(),
  equipements: z.array(z.object({ id: z.number() })).optional(),
  ville: z.object({
    id: z.number(),
    nom: z.string(),
  }).optional(),
  type_bien: z.object({
    id: z.number(),
    nom: z.string(),
  }).optional(),
});

export default AnnonceValidator;
