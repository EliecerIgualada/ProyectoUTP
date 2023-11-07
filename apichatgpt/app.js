require('dotenv').config()
const express = require('express')
const app = express()
const RegAcess = require('./middleware/RegAcess');
//cambio
const cors = require('cors');

const UserRoutes = require('./routes/UserRoutes')
const ChatGptRoutes= require('./routes/ChatGptRoutes')
const InventarioRoutes = require('./routes/InventarioRoutes')

//cambio
app.use(cors());

app.use(express.json())
app.use(RegAcess)

app.use('/user', UserRoutes);
app.use('/chatgpt', ChatGptRoutes)
app.use('/inventario',InventarioRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Listening on port '+process.env.PORT);
});