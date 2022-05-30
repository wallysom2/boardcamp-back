import { Router } from "express";

import { getAllCategories} from "./../controllers/boardsController.js";
import { addCategory } from "./../controllers/boardsController.js";
import { getAllGames } from "./../controllers/boardsController.js";
import { addGame } from "./../controllers/boardsController.js";
import {getAllCustomers} from "./../controllers/boardsController.js";
import {addCustomer} from "./../controllers/boardsController.js";



import {postCategoryMid} from "../middlewares/postCategoryMid.js";
import {postGameMid} from "../middlewares/postGameMid.js";
import {postCustomerMid} from "../middlewares/postCustomerMid.js";


const boardRouter = Router();

boardRouter.get("/categories", getAllCategories);
boardRouter.post("/categories", postCategoryMid, addCategory);
boardRouter.get("/games", getAllGames);
boardRouter.post("/games", postGameMid, addGame);
boardRouter.get("/customers" , getAllCustomers);   
boardRouter.post("/customers", postCustomerMid, addCustomer);


export default boardRouter;