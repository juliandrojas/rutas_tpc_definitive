export const cargarDatosEmpresa = (req, res) => {
    res.render('cargarDatosEmpresa');
}
export const cargarInformacion = (req, res) => {
    const { nombreempresa } = req.body;
    console.log(nombreempresa);
    console.log(req.file);
    res.send('UPLOAD IMAGE');
}