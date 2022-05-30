import { Router } from "express";

import { getAllCategories} from "./../controllers/boardsController.js";
import { addCategory } from "./../controllers/boardsController.js";

import {validateBoard} from "../middlewares/boardValidator.js";

const boardRouter = Router();

boardRouter.get("/categories", getAllCategories);
boardRouter.post("/categories", validateBoard, addCategory);


export default boardRouter;