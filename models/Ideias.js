import mongoose from 'mongoose'


const ideiasSchema = mongoose.Schema({
    estado: Boolean,
    pontuação: Number,


    criador: String,
    dataCriacao: Date,
    desc: String,
    setores: String,
    envolvidos: String,
    impacto: String,
    /* anexo: String, */
})

const Ideias = mongoose.model('Ideia', ideiasSchema)

export default Ideias