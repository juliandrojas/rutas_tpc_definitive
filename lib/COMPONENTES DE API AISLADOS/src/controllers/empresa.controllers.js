//import { pool } from "../db/database.js";
export const registrarEmpresa = async (req, res) => {
    res.render('chargeEmpresa')
}
export const cargarFoto = async (req, res) => {
    res.send("uploaded");
}
export const cargarDatos = async (req, res) => {
    const { nombreempresa } = req.body;
    console.log(nombreempresa);
    console.log(req.file);
    res.send('UPLOAD IMAGE');
    //console.log(nombreempresa);
    //res.send("Carga exitosa de: "+nombreempresa);
};
