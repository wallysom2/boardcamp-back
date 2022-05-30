import joi from "joi";
import db from "../db.js";

export async function postCategoryMid(req, res, next) {
  const newBoard = req.body;

  const boardSchema = joi.object({
    name: joi.string().required()
  });

  const validation = boardSchema.validate(newBoard);
  if (validation.error) {
    res.status(400).send(validation.error.details);
    return;
  }

  try {
    const result = await db.query(`SELECT * FROM categories WHERE name = $1`, [req.body.name]);
    if (result.rows[0]) {
      return res.sendStatus(409);
    }
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}