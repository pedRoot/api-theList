// define a rules of validators for routes

import { body, validationResult } from "express-validator";

export const userEdit = () => {
  return [
    body('email', 'Invalid email').exists().isEmail(),
    body('wasSelected', 'Value not is valid').optional().isBoolean(),
    body('isActive', 'Value not is valid').optional().isBoolean()
  ];
}

export const userShow = () => {
  return [
    body('email', 'Invalid email').optional().isEmail()
  ];
}

export const catchError = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
}

