const express = require('express');
const app = express();

const ValidateInventario = (req, res, next) => {
  const { descripcion, precio, atributo, cantidad, codigo_ITEM } = req.body;
  const missingFields = [];

  if (!descripcion.articulo) {
    missingFields.push('descripcion.articulo');
  }
  if (!descripcion.size) {
    missingFields.push('descripcion.size');
  }
  if (!descripcion.unidad) {
    missingFields.push('descripcion.unidad');
  }
  if (!precio.costoUnitario) {
    missingFields.push('precio.costoUnitario');
  }
  if (!precio.total) {
    missingFields.push('precio.total');
  }
  if (!atributo.color) {
    missingFields.push('atributo.color');
  }
  if (!atributo.tipo) {
    missingFields.push('atributo.tipo');
  }
  if (!atributo.marca) {
    missingFields.push('atributo.marca');
  }
  if (!cantidad) {
    missingFields.push('cantidad');
  }
  if (!codigo_ITEM) {
    missingFields.push('codigo_ITEM');
  }

  if (missingFields.length > 0) {
    const errorMessage = `Please check your information. Missing fields: ${missingFields.join(', ')}`;
    return res.status(400).send(errorMessage);
  }

  next();
};

module.exports = ValidateInventario;