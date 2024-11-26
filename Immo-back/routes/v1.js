import express from "express";

import AnnonceRouter from "./v1/annonce.js";

const router = express.Router();

router.use("/annonce", AnnonceRouter);

export default router;
