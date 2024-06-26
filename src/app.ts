
import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes"
import dbConnect from "./config/mongo";
import { authRouter } from './routes/auth';
import { clinicasRouter } from './routes/clinicas';
import { cotizacionRouter } from './routes/cotizacion';
import { cotizacionesRouter } from './routes/cotizaciones';
import { empresasRouter } from './routes/empresas';
// import { planesRouter } from './routes/planes';
import { preciosRouter } from './routes/precios';
import { quoteRouter } from './routes/quote';
import { uploadRouter } from './routes/upload';
import { uploadsRouter } from './routes/uploads';
import { getItems, getItemById, createItem, updateItem, deleteItem, searchItem  } from './controllers/planes';



import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3001;

const whitelist = [
    'http://localhost:4200',
    'http://localhost:4300',
    'http://localhost:4400',
    'http://localhost:4500',
    'https://sakai-ng-front.vercel.app',
    'https://soloclinic.vercel.app',
    'https://front-prepagas.vercel.app'
  ];
  const portRegex = /^http:\/\/localhost(?::\d+)?$/;
  
  const filteredWhitelist = whitelist.filter((origin) => portRegex.test(origin));
  
 

const app = express()
app.use(cors({
      origin: '*',

    // origin: filteredWhitelist,
    allowedHeaders: ['Authorization', 'Content-Type']

  }));
  app.get("/",(req,res) => {
    const htmlResponse =`
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
    <style>
        /* Estilos CSS van aquí */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
        }
        /* Agrega más estilos según tus necesidades */
    </style>
</head>
<body>

<header>
    <h1>Bienvenido a mi página web</h1>
</header>

<main>
    <p>Aquí puedes empezar a escribir el contenido de tu página web.</p>
</main>

<footer>
    <p>© 2024 Mi Página Web</p>
</footer>

</body>
</html>

    `;
    res.send(htmlResponse)
  });
// Rutas
app.use(router);
app.use(authRouter);
app.use(clinicasRouter);
app.use(cotizacionRouter);
app.use(cotizacionesRouter);
app.use(empresasRouter);
// app.use(planesRouter);
app.use(preciosRouter);
app.use(quoteRouter);
app.use(uploadRouter);
app.use(uploadsRouter);


// Manejo de ruta con parámetros
app.get('/planes',(req, res) => { getItems(req, res);});
app.get('/planes/:id', (req, res) => { getItemById(req, res);});
app.post('/planes', (req, res) => {createItem(req, res) });
app.put('/planes/:id', (req, res) => { updateItem(req, res)});
app.delete('/planes/:id', (req, res) => { deleteItem(req, res)});


app.use(express.json())
app.use(router);
app.use(bodyParser.json({ limit: '50mb' })); // Puedes ajustar el límite según tus necesidades
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

dbConnect().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:` + PORT + `...`);

    });
  })
  .catch(error => console.error(error));
export default app