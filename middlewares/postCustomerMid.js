import joi from "joi";
import db from "../db.js";

export async function postCustomerMid(req, res, next) {
    const dataSchema = joi.object({
        name: joi.string().required(),
        phone: joi.string().pattern(/^[0-9]{10,11}$/).required(),
        cpf: joi.string().pattern(/^[0-9]{11}$/).required(),
        birthday: joi.date()
    });

    const validation = dataSchema.validate(req.body);
    if (validation.error) {
        return res.sendStatus(400);
    }
    try {
        if (req.method === "POST") {
            const result = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [req.body.cpf]);
            if (result.rows[0]) {
                return res.sendStatus(409);
            }
        }
        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}