import mongoose from "mongoose";



const KEYS = `mongodb+srv://admin:{246813579aA}@jlemara.ope5jcj.mongodb.net/pet`

export default async function DbConnection() {

    await mongoose.connect(KEYS)

    console.log('Servidor conectado ao banco de dados')
}



