// modulo para verificacao dos campos
//const { check, validationResult } = require('express-validator');
const { check, validationResult } = require('express-validator/check');

//exports.validationBody = [
const validationBody = [
  //body('title', 'Titulo e requerido').exists()
  check('title', 'Titulo e requerido').exists(),
  check('status', 'O status e requerido').exists(),
  check('description', 'A desqucricao e requerida').exists()
];

const checkBody = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }
  next();
};

// exporta o modulo
module.exports = { validationBody, checkBody};