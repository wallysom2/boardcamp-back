import joi from "joi";

export function validateBoard(req, res, next) {
  const newBoard = req.body;

  const boardSchema = joi.object({
    name: joi.string().required()
  });

  const validation = boardSchema.validate(newBoard);
  if(validation.error) {
    res.status(400).send(validation.error.details);
    return;
  }

  next();
}