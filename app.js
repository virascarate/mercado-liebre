//subido al repositorio "mercado liebre"

const express = require ('express');
const path = require ('path')
const app = express();

//RUTA DE LAS IMAGENES
app.use(express.static(path.resolve(__dirname, "./public")));

//PUERTO DONDE CORRE EL SERVIDOR
app.listen (process.env.PORT || 3030,() => {console.log ("Servidor corriendo http://localhost:3030")})

//HOME
app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/home.html'))})
//REGISTER
//.get direccion a REGISTER y te para en esa ruta.
app.get ('/register', (req,res) => {res.sendFile(path.join(__dirname, '/views/register.html'))})
//.post envia como rta /register
app.post ('/register', (req,res) => {res.redirect('/')})
//LOGIN
app.get ('/login', (req,res) => {res.sendFile(path.join(__dirname, '/views/login.html'))})
app.post ('/login', (req,res) => {res.redirect('/')})
