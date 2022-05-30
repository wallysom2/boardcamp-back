import { Router } from "express";

import { getAllCategories} from "./../controllers/boardsController.js";
import { addCategory } from "./../controllers/boardsController.js";

import {postCategoryMid} from "../middlewares/postCategoryMid.js";

const boardRouter = Router();

boardRouter.get("/categories", getAllCategories);
boardRouter.post("/categories", postCategoryMid, addCategory);


export default boardRouter;