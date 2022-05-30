import db from "./../db.js";

export async function getAllCategories(req, res) {
  try {
    const result = await db.query("SELECT * FROM categories");
    res.send(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).send("Ocorreu um erro ao obter as categorias!");
  }
}

export async function addCategory(req, res) {
  const newCategory = req.body;
  try {
    const result = await db.query(`
        INSERT INTO categories (name)
        VALUES ($1);
      `, [req.body.name]);

    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.status(500).send("Ocorreu um erro ao criar categoria!");
  }
}


export async function getAllGames(req, res) {
  try {
    const result = await db.query("SELECT * FROM games");
    res.send(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).send("Ocorreu um erro ao obter os games!");
  }
}

export async function addGame(req, res) {
  const newGame = req.body;
  try {
    const result = await db.query(`
        INSERT INTO games ("name", "image", "stockTotal", "categoryId", "pricePerDay")
        VALUES ($1 , $2, $3, $4, $5);
      `, [req.body.name, req.body.image, req.body.stockTotal, req.body.categoryId, req.body.pricePerDay]);

    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.status(500).send("Ocorreu um erro ao criar jogo!");
  }
}

export async function getAllCustomers(req, res) {
  try {
    const result = await db.query("SELECT * FROM customers");
    res.send(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500).send("Ocorreu um erro ao obter os clientes!");
  }
}

export async function addCustomer(req, res) {
  const newGame = req.body;
  try {
    const result = await db.query(`
        INSERT INTO customers ("name", "phone", "cpf", "birthday")
        VALUES ($1 , $2, $3, $4);
      `, [req.body.name, req.body.phone, req.body.cpf, req.body.birthday]);

    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.status(500).send("Ocorreu um erro ao criar novo cliente!");
  }
}