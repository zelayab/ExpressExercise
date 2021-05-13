const express = require('express');
const path = require('path');
const app = express();
const PORT = 5500;
const url = path.join(__dirname, "index.html");


//Middleware para archivos - recursos estaticos de imagen, script,css
app.use(express.static(__dirname));

// body-parser middleware - actuan sobre lo que interesa e ignoren el resto
// Pone contenido del form en un req.body
app.use(express.urlencoded({ extended: true }));


app.get("/", function(req,res){
    res.sendFile(url);
})

// Post que recibo datos del form y responde
app.post("/Hola", function(req,res){
    console.log(req.body);
    if( !req.body.nombre | !req.body.apodo | !req.body.apellido){
        res.send('<h1> Please Verified Your login</h1>')
    }else{

        res.send(`<h1> Welcome ${req.body.nombre} "${req.body.apodo}" ${req.body.apellido} </h1>`);
    }
    
})

app.listen(PORT, function(){
    console.log(`Server listen on ${PORT}`)
})