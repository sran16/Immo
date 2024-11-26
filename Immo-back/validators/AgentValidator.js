import { z } from "zod";

const AgentValidator = z.object({
  id: z.number().optional(),
  badge_number: z.number(),
  password: z.string(),
});

export default AgentValidator;
