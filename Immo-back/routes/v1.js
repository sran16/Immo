import express from "express";

import AnnonceRouter from "./v1/annonce.js";
import AuthRouter from "./v1/auth.js";
import CommerceRouter from "./v1/commerce.js";

const router = express.Router();

router.use("/annonce", AnnonceRouter);
router.use("/auth", AuthRouter);
router.use("/commerce", CommerceRouter);

export default router;
