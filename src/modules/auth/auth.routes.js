import { Router } from "express";
import validate from "../../middlewares/validate.middleware.js";
import authController from "./auth.controller.js";
import authValidation from "./auth.validation.js";


const router = Router();

router.post("/register", validate(authValidation.register), authController.register);
router.post("/login", validate(authValidation.login), authController.login);


export default router;