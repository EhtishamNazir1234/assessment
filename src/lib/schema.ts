import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, "Name must be 2 charachters at least"),
  email: z.string().email("Invalid email address"),
  bio: z.string().min(10, "Bio must be at least 10 charachters"),
});
