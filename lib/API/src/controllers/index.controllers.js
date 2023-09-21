import { pool } from "../database.js";

//import { readdir } from 'fs/promises';
export const homeGrid = (req, res) => {
  const queryEmpresas = 'SELECT * FROM empresas';
  //Ejecutamos la consulta SQL
  pool.query(queryEmpresas, (error, result) => {
    if(error) {
      res.status(500). json({error: 'Error al obtener datos de la API'})
    }
    //Obtenemos las filas de la consulta
    const empresas = result.rows; 
    //Formamos el JSON con los datos
    const responseJSON = { empresas }
    //Enviamos el JSON como respuesta
    res.json(responseJSON);
  })
}
export const indexHTML = (req, res) => {
  res.render('index');
}
export const uploadImage = (req, res) => {
  console.log(req.file);
  res.send('UPLOAD IMAGE');
}
/*export const homeGrid = async (req, res) => {
  try {
    const path = './images/';
    const files = await readdir(path);
    res.json({ imagenes: files });
  } catch (error) {
    res.status(500).json({ error: 'Error al leer las imágenes' });
  }
};*/
export const login = (req, res) => {
  res.render('login.ejs');
}