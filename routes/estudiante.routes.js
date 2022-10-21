const EstudianteController = require("../controllers/estudiante.controller");

module.exports = app => {
    app.get("/api/estudiantes/", EstudianteController.muestraEstudiantes);
    app.get("/api/estudiantes/:id", EstudianteController.muestraUnEstudiante);
    app.post("/api/estudiantes/new", EstudianteController.creaEstudiante);
    app.put("/api/estudiantes/update/:id", EstudianteController.actualizaEstudiante);
    app.delete("/api/estudiantes/delete/:id", EstudianteController.borrarEstudiante);
};