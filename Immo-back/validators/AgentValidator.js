import { z } from "zod";

const AgentValidator = z.object({
  id: z.number().int().optional(),
  badge_number: z.number().int(),
  password: z.string().min(6),
});

export default AgentValidator;
