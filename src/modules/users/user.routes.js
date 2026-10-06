import { Router } from "express";
import userController from "./user.controller.js";
import validate from "../../middlewares/validate.middleware.js";
import userValidation from "./user.validation.js";


const router = Router();

router.get("/", userController.list);
router.post("/", validate(userValidation.create), userController.create);
router.patch("/:id", validate(userValidation.update), userController.update);
router.delete("/:id", userController.remove);


export default router;