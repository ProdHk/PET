import mongoose from 'mongoose'


const usuariosSchema = mongoose.Schema({

    name: String,
    fullName: String,
    dataNasc: Date,

    email: String,
    pass: String,
    pontos: Number,
    ideias: [],
    melhorias: [],
    ocorrencias: [],

})

const Usuarios = mongoose.model('Usuario', usuariosSchema)

export default Usuarios