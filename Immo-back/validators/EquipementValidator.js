import { z } from "zod";

const EquipementValidator = z.object({
  id: z.number().int().optional(),
  nom: z.string().min(3),
  annonces: z.array(z.object({ id: z.number().int() })).optional(),
});

export default EquipementValidator;
