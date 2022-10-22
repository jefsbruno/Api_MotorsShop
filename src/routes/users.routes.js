import { Router } from "express";

const router = Router();

router.get("", (req, res) => {
  res.send("Ta rodando time...");
});

export default router;
