import { z } from "zod";


export const AnnonceValidator = z.object({
  id: z.number().int().optional(),
  titre: z.string().min(5),
  description: z.string().min(10),
  prix: z.number().int().min(1),
  date_publication: z.date().optional().default(new Date()),
  type_bienId: z.number().int(),
  nombre_pieces: z.number().int().min(1),
  nombre_chambres: z.number().int().min(1),
  nombre_salles_bain: z.number().int().min(1),
  surface: z.number().int().min(1),
  meuble: z.string(),
  villeId: z.number().int(),
  nom_vendeur: z.string().min(3),
  img_bien: z.string().url("L'URL de l'image doit être valide"),
  equipements: z.array(z.object({ id: z.number().int() })).optional(),
  ville: z
    .object({
      id: z.number().int(),
      nom: z.string().min(2),
    })
    .optional(),
  type_bien: z
    .object({
      id: z.number().int(),
      nom: z.string().min(2),
    })
    .optional(),
});

export const EquipementValidator = z.object({
  id: z.number().int().optional(),
  nom: z
    .string()
    .min(3, "Le nom de l'équipement doit comporter au moins 3 caractères"),
  annonces: z.array(z.object({ id: z.number().int() })).optional(),
});

export const TypeBienValidator = z.object({
  id: z.number().int().optional(),
  nom: z
    .string()
    .min(3, "Le nom du type de bien doit comporter au moins 3 caractères"),
  annonces: z.array(z.object({ id: z.number().int() })).optional(),
});

export const VilleValidator = z.object({
  id: z.number().int().optional(),
  nom: z
    .string()
    .min(2, "Le nom de la ville doit comporter au moins 2 caractères"),
  annonces: z.array(z.object({ id: z.number().int() })).optional(),
});



export default {
  AnnonceValidator,
  EquipementValidator,
  TypeBienValidator,
  VilleValidator,
};
