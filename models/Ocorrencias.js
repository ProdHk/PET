import mongoose from 'mongoose'


const ocorrenciasScrema = mongoose.Schema({

    estado: Boolean,
    pontuação: Number,

    criador: String,
    tipo: String,
    dataCriacao: Date,
    dataOcorrido: Date,
    horarioOcorrido: Date,
    envolvidos: String,
    desc: String,
    sugestao: String,
    /* anexo: String, */
})

const Ocorrencias = mongoose.model('Ocorrencia', ocorrenciasScrema)

export default Ocorrencias