import { z } from "zod";

export const VilleValidator = z.object({
  id: z.number().int().optional(),
  nom: z.string().min(2),
  annonces: z.array(z.object({ id: z.number().int() })).optional(),
});

export default VilleValidator;
