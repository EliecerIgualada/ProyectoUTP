const express = require('express')
require('dotenv').config()
const router = express.Router()
var GPTModel = require('../models/GPTModel')
const ValidatePrompt = require('../middleware/ValidatePrompt')
const MongoConnect = require('../db')
const ValidateToken = require('../middleware/ValidateToken')
const axios = require('axios');
const validateToken = require('../middleware/ValidateToken')
const { default: mongoose } = require('mongoose')
MongoConnect()


router.post('/', validateToken, ValidatePrompt , async(req, res) => {
    const message =  req.body.message;
    const id_user = req.user.id;
    let date = new Date();
    axios.post(process.env.APIURL, {
        "model": "gpt-3.5-turbo", 
        "messages": [{ role: "system", "content": message }
        ],
        "temperature": 0.7, 
        "max_tokens": 3000, 
        "top_p": 1, 
        "frequency_penalty": 0, 
        "presence_penalty": 0,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.APIKEY}`
        }
    })
        .then(response => {
            const completion = response.data.choices[0].message.content;
            const GPT = new GPTModel({prompt: message,response: completion, id_user: id_user, date_created: date})
            GPT.save();
            res.status(200).json(GPT);
        })
        .catch(error => {
            console.log(error); 
            res.status(500).send('Ha ocurrido un error en la solicitud a la API de ChatGPT');
        });
});



router.get('/user', validateToken, async (req, res)=>{
    try{   
       const GPT = await GPTModel.find({id_user:req.user.id})
        if(!GPT)
            return res.status(404).send('User prompt  not found')
        return res.status(200).json(GPT)
        
    }catch(err){
        console.log(err);
        return  res.status(500).send('Ups there was an error');
    }
});


module.exports = router;