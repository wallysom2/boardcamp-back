import { Router } from "express";

import { getAllCategories} from "./../controllers/boardsController.js";
import { addCategory } from "./../controllers/boardsController.js";
import { getAllGames } from "./../controllers/boardsController.js";
import { addGame } from "./../controllers/boardsController.js";
import {getAllCustomers} from "./../controllers/boardsController.js";
import {getOneCustomer} from "./../controllers/boardsController.js";
import {addCustomer} from "./../controllers/boardsController.js";
import {putUpdateCustomer} from "./../controllers/boardsController.js";



import {postCategoryMid} from "../middlewares/postCategoryMid.js";
import {postGameMid} from "../middlewares/postGameMid.js";
import {postCustomerMid} from "../middlewares/postCustomerMid.js";


const boardRouter = Router();

boardRouter.get("/categories", getAllCategories);
boardRouter.post("/categories", postCategoryMid, addCategory);
boardRouter.get("/games", getAllGames);
boardRouter.post("/games", postGameMid, addGame);
boardRouter.get("/customers" , getAllCustomers);   
boardRouter.get("/customers/:id", getOneCustomer);
boardRouter.post("/customers", postCustomerMid, addCustomer);
boardRouter.put("/customers/:id", putUpdateCustomer);


export default boardRouter;