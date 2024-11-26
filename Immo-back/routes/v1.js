import express from "express";

import AnnonceRouter from "./v1/annonce.js";
import AuthRouter from "./v1/auth.js";

const router = express.Router();

router.use("/annonce", AnnonceRouter);
router.use("/auth", AuthRouter);

export default router;
