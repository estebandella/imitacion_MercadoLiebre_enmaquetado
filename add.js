//Desde Terminal
//npm init -y
//npm install express --save
//npm instal -g nodemon

//Requerimos el Moudlo Express
const express = require('express');

//Ejecutamos la funcion y almacenamos en un OBJETO
const app = express();

//EVIANDO UN ARCHIVO AL SERVIDOR
const path = require('path'); //unifica las rutas entre los distintos sistemas operativos

//Levantamos el SERVIDOR
app.listen(process.env.PORT || 3030,() => { 
    console.log('Servidor 3030 corriendo y escuchando bien')
});

//CARPETA ARCHIVOS ESTATICOS (PUBLIC)**************
//Le decimos a la aplicacion de express que queremos tenerer la carpeta public como un recurso de archivos estaticos para usarlos de manera simple
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

// Le da formato legible a los dattos enviados en formulario
app.use(express.urlencoded());


//************************************************
//Sistema de ruteo en Express
app.get('/', (req,res) => {
    const archivo = path.join(__dirname,'/views/home.html');
    res.sendFile(archivo);//via un arhcivo al navegador
});

//Sistema de ruteo en Express
app.get('/register', (req,res) => {
    const archivo = path.join(__dirname,'/views/register.html');
    res.sendFile(archivo);//via un arhcivo al navegador
});

app.post('/register',(req,res)=> {
    res.redirect('/');
})

app.get('/login', (req,res) => {
    const archivo = path.join(__dirname,'/views/login.html');
    res.sendFile(archivo);//via un arhcivo al navegador
});
