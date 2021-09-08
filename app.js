//subido al repositorio "mercado liebre"

const express = require ('express');
const path = require ('path')

const app = express();

//const publicPath = path.resolve (__dirname,'./public')
//app.use(express.static(publicPath))

app.use(express.static(path.resolve(__dirname, "./public")));


app.listen (3030,() => {console.log ("Servidor corriendo http://localhost:3030")

})

app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/home.html'))})
