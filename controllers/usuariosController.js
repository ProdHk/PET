import Usuarios from '@/models/Usuarios'
import DbConnection from './dbConnection'


/* 

- Buscar Usuarios
- Buscar Usuario
- Adicionar Usuario
- Editar Usuario
- Adicionar interações do  Usuario
- Buscar total pontos usuario

*/


export async function BuscarUsuarios() {
    try {
        await DbConnection()
        const usuarios = await Usuarios.find()
        console.log("Usuarios encontrados")
        return usuarios
    } catch (error) {
        console.log("Usuarios não encontrados")
        console.log(error)

    }
}

export async function BuscarUsuario({ id }) {
    try {
        await DbConnection()
        const usuario = await Usuarios.find({ _id: id })
        console.log("Usuario encontrado")
        return usuario
    } catch (error) {
        console.log("Usuario não encontrado")
        console.log(error)

    }
}


export async function AdicionarUsuario({ name, fullName, dataNasc, email, pass }) {
    const newUser = { name, fullName, dataNasc, email, pass }
    try {
        await DbConnection()
        const usuarios = await Usuarios.find({ email: email })
        let usuario
        usuarios.length > 0 ?
            usuario = await Usuarios.create(newUser)

            : console.log("Este email já está sendo utilizado")

        console.log("Usuario adicionado")
        return usuario
    } catch (error) {
        console.log("Usuario não adicionado")
        console.log(error)

    }
}

export async function EditarUsuario({ _id, name, fullName, dataNasc, pass }) {
    try {
        const userEdited = { name, fullName, dataNasc, pass }
        await DbConnection()
        await Usuarios.findByIdAndUpdate(_id, userEdited)
        console.log("Usuario editado com sucesso!")
    } catch (error) {
        console.log("Usuario não foi editado")
        console.log(error)

    }
}

export async function AdicionarInteracao({ _id, type, criador }) {
    /* const _id = id da interacao */
    /* const type = ocorrencia||ideia||melhoria */
    /* const criador = usuario responsavel pelo preenchimento */

    try {
        await DbConnection()
        await Usuarios.findByIdAndUpdate(criador, { [type]: _id })
        console.log("Interação vinculada ao usuario")
    } catch (error) {
        console.log("Interação não foi vinculada ao usuario")
        console.log(error)
    }

}

