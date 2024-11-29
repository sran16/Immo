import express from "express";
import { getAllCommerces } from "../../commerceService.js"; 
const router = express.Router();

router.get("/commerces", async (req, res) => {
  try {
    const commerces = await getAllCommerces();
    res.json(commerces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
