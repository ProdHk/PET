import Ideias from "@/models/Ideias"
import DbConnection from "./dbConnection"

const estado = false
const data = Date.now()

export async function BuscarIdeias() {

    try {
        await DbConnection()
        const ideias = await Ideias.find()
        console.log("Ideias carregadas")
        return ideias
    } catch (error) {
        console.log("Ideias não foram carregadas")
        console.log(error)

    }
}

export async function BuscarIdeia({ id }) {

    try {
        await DbConnection()
        const ideia = Ideias.find({ _id: id })
        console.log("Ideia encontrada")
        return ideia
    } catch (error) {
        console.log("Ideia não encontrada")
        console.log(error)

    }
}

export async function AdicionarIdeia({ criador, desc, setores, envolvidos, impacto }) {

    const dataCriacao = data
    const novaIdeia = { estado, dataCriacao, criador, desc, setores, envolvidos, impacto }
    try {
        await DbConnection()
        const ideia = await Ideias.create(novaIdeia)
        console.log("Ideia criada com sucesso")
        return ideia
    } catch (error) {
        console.log("Não foi possivel adicionar")
        console.log(error)
    }
}

export async function EditarIdeia({ _id, data }) {

    try {
        await DbConnection()
        const ideiaEditada = await Ideias.findByIdAndUpdate(_id, data)
        console.log("Ideia editada com sucesso")
        return ideiaEditada
    } catch (error) {
        console.log("Ideia não foi editada,", error)

    }
}

export async function PontuarIdeia({ _id, pontos }) {

    try {
        await DbConnection()
        const ideia = Ideias.findByIdAndUpdate(_id, { estado: true, pontos: pontos })
        console.log("Ideia pontuada com sucesso!")
        return ideia
    } catch (error) {
        console.log("Ideia não foi pontuada", error)
    }
}
