const mongoose = require("mongoose");

const EsquemaEstudiante = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    stack: String
}, { timestamps: true, versionKey: false});
//Timestamps:true -> crea los campos de createdAt y updatedAt
//versionKey:false -> elimina el atributo _v

const Estudiante = mongoose.model("estudiantes", EsquemaEstudiante);

module.exports = Estudiante;