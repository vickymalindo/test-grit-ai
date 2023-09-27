import { body } from 'express-validator';

const insertValidator = [
  body('nama').notEmpty().withMessage('Nama is required'),
  body('alamat').notEmpty().withMessage('Alamat is required'),
];

export default insertValidator;
