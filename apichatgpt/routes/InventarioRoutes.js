const express = require('express')
const router = express.Router()
var InventarioModel = require('../models/InventarioModel')
const MongoConnect = require('../db')
const bcrypt = require('bcryptjs');
const validateToken = require('../middleware/ValidateToken')
const jwt  = require("jsonwebtoken");
const mongoose = require("mongoose");
const ValidateInventario = require('../middleware/ValidateInventario');
MongoConnect()

// Se registra un articulo nuevo a la base de datos 
router.post('/', validateToken, ValidateInventario, async(req, res) => {
    try{
        const { id_user, descripcion, precio, atributo, cantidad, date_created, codigo_ITEM } = req.body;
        const existente = await InventarioModel.findOne({ codigo_ITEM });
        if (existente){
            res.status(200).json("Ya existe");
        }else{
            const id_user = req.user.id;
            const date_created = new Date()
            const nuevoInventario = new InventarioModel ({ codigo_ITEM, descripcion, precio, atributo, cantidad, date_created, id_user : id_user })
            await nuevoInventario.save();
            res.status(200).json(nuevoInventario);
        }

    }catch(err){
        console.log(err);
        return res.status(404).send(err);
    }
})
// Se busca el producto por el codigo Items
router.get('/:codigo_ITEM', async(req, res)=>{
    try{
        var {codigo_ITEM} = req.params;
        const articulos = await InventarioModel.findOne({codigo_ITEM});
        if (!articulos)
        return res.status(404).json({status:"No se encuentra el Artículo"})
        return res.json(articulos)

    }catch(err){
        return res.status(500).send('Ups there was an error')
    }
});
// Se busca el producto por el nombre del artículo
router.get('/nombre/:articulo', async(req, res)=>{
    try{
        var {articulo} = req.params;
        const productos = await InventarioModel.find({"descripcion.articulo":articulo});

        if (!productos){
        return res.status(404).json({status:"No se encuentra el Artículo"})
        }
        return res.json(productos)

    }catch(err){
        return res.status(500).send('Ups there was an error')
    }
});
// ruta que permite actualizar todos los campos del articulo
router.put('/:codigo_ITEM', validateToken, async(req, res)=>{
    try{
        var {codigo_ITEM} = req.params;
        const updatedFields = req.body
        const productos = await InventarioModel.findOneAndUpdate({codigo_ITEM},updatedFields,{new:true})
        if (!productos) {
            return res.status(404).json({ status: "No se encuentra el Artículo" });
          }
      
          return res.json(productos);

    }catch(err){
        return res.status(500).send('Ups there was an error')
    }
});

router.delete('/:codigo_ITEM', validateToken, async (req, res)=>{
    try{
        var {codigo_ITEM} = req.params;
        const deletedProduct = await  InventarioModel.findOneAndDelete({ codigo_ITEM })
        if (!deletedProduct){
            return res.status(404).json({ status: "No se encuentra el Artículo que desea eliminar" });
        }
        return res.json("Se eliminó correctamente del inventario");
    }catch{
        return res.status(500).send('Ups there was an error')
    }
})
module.exports = router;