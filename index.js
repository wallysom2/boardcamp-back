import express, {json} from "express";
import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";

import boardRouter from "./routes/boardRouter.js";

const app = express();
app.use(cors());
app.use(json());
dotenv.config();

// routes
app.use(boardRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(chalk.bold.green(`Servidor em pé na porta ${port}`)));