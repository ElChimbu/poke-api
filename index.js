const express = require('express');
const app = express();
const Route = require('./api/route');
const cors = require('cors');

app.use(cors())
app.use(Route);

app.listen(4000, ()=>{
    console.log('servidor escuchando puerto 4000')
})