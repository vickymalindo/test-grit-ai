import bodyParser from 'body-parser';
import express from 'express';
import { validationResult } from 'express-validator';
import db from './database.js';
import auth from './middleware.js';
import response from './response.js';
import insertValidator from './validation.js';
const app = express();

app.use(bodyParser.json());

app.get('/', auth, (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) throw new Error(err);
    response({
      statusCode: 200,
      message: 'Success get data',
      datas: result,
      res,
    });
  });
});

app.post('/', auth, ...insertValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json(errors);
  const { nama, alamat } = req.body;

  const sql = `INSERT INTO users (nama, alamat) VALUES ('${nama}', '${alamat}')`;
  db.query(sql, (err, result) => {
    if (err) throw new Error(err);
    if (result.affectedRows)
      return response({
        statusCode: 200,
        message: 'Insert data success',
        datas: result.insertId,
        res,
      });
    return response({
      statusCode: 400,
      message: 'Insert data failed',
      datas: null,
      res,
    });
  });
});

app.listen(3000, () => console.log('server run on port 3000'));
