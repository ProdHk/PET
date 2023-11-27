import mongoose from 'mongoose'


const melhoriasScrema = mongoose.Schema({
    estado: Boolean,
    dataCriacao: Date,
    pontuação: Number,


    criador: String,
    desc: String,
    solucao: String,
    sugestao: String,
    /* anexo: String, */
})

const Melhorias = mongoose.model('Melhoria', melhoriasScrema)

export default Melhorias