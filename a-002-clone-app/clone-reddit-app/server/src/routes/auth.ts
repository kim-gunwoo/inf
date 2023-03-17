import { Request, Response, Router } from "express";

const register = async (req: Request, res: Response) => {
  const { email, usename, password } = req.body;
  console.log(email, "email");
  console.log(req.body);
};

const router = Router();
router.post("/register", register);

export default router;
