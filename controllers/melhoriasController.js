
import Melhorias from "@/models/Melhorias"
import DbConnection from "./dbConnection"

const estado = false
const data = Date.now()

export async function BuscarMelhorias() {

    try {
        await DbConnection()
        const melhorias = await Melhorias.find()
        console.log("Melhorias carregadas")
        return melhorias
    } catch (error) {
        console.log("Melhorias não foram carregadas")
        console.log(error)

    }
}

export async function BuscarMelhoria({ id }) {

    try {
        await DbConnection()
        const melhoria = Melhorias.find({ _id: id })
        console.log("Melhorias encontrada")
        return melhoria
    } catch (error) {
        console.log("Melhorias não encontrada")
        console.log(error)

    }
}

export async function AdicionarMelhoria({ criador, desc, solucao, sugestao, }) {

    const dataCriacao = data
    const novaMelhoria = { estado, dataCriacao, criador, desc, solucao, sugestao, }
    try {
        await DbConnection()
        const melhoria = await Melhorias.create(novaMelhoria)
        console.log("Melhoria criada com sucesso")
        return melhoria
    } catch (error) {
        console.log("Não foi possivel adicionar")
        console.log(error)
    }
}

export async function EditarMelhoria({ _id, data }) {

    try {
        await DbConnection()
        const melhoriaEditada = await Melhorias.findByIdAndUpdate(_id, data)
        console.log("Melhoria editada com sucesso")
        return melhoriaEditada
    } catch (error) {
        console.log("Melhoria não foi editada,", error)

    }
}

export async function PontuarMelhoria({ _id, pontos }) {

    try {
        await DbConnection()
        const melhoria = Melhorias.findByIdAndUpdate(_id, { estado: true, pontos: pontos })
        console.log("Melhoria pontuada com sucesso!")
        return melhoria
    } catch (error) {
        console.log("Melhoria não foi pontuada", error)
    }
}
