import { z } from "zod";

export const TypeBienValidator = z.object({
  id: z.number().int().optional(),
  nom: z.string().min(3),
  annonces: z.array(z.object({ id: z.number().int() })).optional(),
});

export default TypeBienValidator;
