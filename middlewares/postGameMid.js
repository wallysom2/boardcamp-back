import joi from "joi";
import db from "../db.js";

export async function postGameMid (req, res, next) {
    const gameDataSchema = joi.object({
        name: joi.string().required(),
        image: joi.allow(),
        stockTotal: joi.number().required(),
        pricePerDay: joi.number().required(),
        categoryId: joi.number().required()
    });
    const validation = gameDataSchema.validate(req.body);
    if (validation.error) {
        return res.sendStatus(400);
    }
    const name = req.body.name;
    let nomeLista = name.split(" ");
    let novoNome = nomeLista.map(str => str[0].toUpperCase() + str.substring(1).toLowerCase());
    req.body.name = novoNome.join(" ");

    try {
        const existeCat = await db.query(`SELECT * FROM categories WHERE id = $1`, [req.body.categoryId]);
        if (!existeCat.rows[0]) {
            return res.sendStatus(400);
        }

        const nomeJaExiste = await db.query(`SELECT * FROM games WHERE name = $1`, [req.body.name]);
        if (nomeJaExiste.rows[0]) {
            return res.sendStatus(409);
        }

        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
