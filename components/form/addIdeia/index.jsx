"use client"
import { useState } from "react"



export default function FormAddIdeia() {

    const [criador, setCriador] = useState('')
    const [titulo, setTitulo] = useState('')
    const [desc, setDesc] = useState('')
    const [setores, setSetores] = useState('')
    const [envolvidos, setEnvolvidos] = useState('')
    const [impacto, setImpacto] = useState('')




    return (

        // form
        <div className=" bg-zinc-50 w-full h-full  m-auto
           text-center justify-center items-center">

            {/* titulo */}
            <p className="text-xl text-zinc-800 ">
                Preencha os dados, cadastre sua ideia e ganhe pontos!
            </p>

            {/* NOME */}
            <div className="flex w-5/6 justify-evenly items-center  mt-auto
            ">
                <label className="text-lg p-2 w-2/6">
                    Nome
                </label>
                <input
                    className="text-sm rounded p-2
                    text-center items-center w-4/6"
                    type="text"
                    placeholder={``}
                    value={criador}
                    onChange={(e) => setCriador(e.target.value)} />
            </div>

            {/* TITULO   */}



            {/* DESC */}


            {/* INPUT */}


            {/*  */}


            {/* ENVOLVIDOS */}

            {/*  */}


            {/* IMPACTO */}


            {/*  */}



            <button className="p-3 bg-red-600 rounded"
                onClick={() => console.log(criador, titulo, desc, setores,
                    envolvidos, impacto,)}>
                Cadastrar ideia
            </button>
        </div>
    )
}



/* 

            <div className="item flex">
                <label>
                    Setores:
                </label>
                <input type="text"
                    placeholder="Quais setores se beneficiariam ?"
                    value={setores}
                    onChange={(e) => setSetores(e.target.value)} />
            </div>

            <div className="item flex">
                <label>
                    Envolvidos:
                </label>
                <input type="text"
                    placeholder="Quais serão os envolvidos ?"
                    value={envolvidos}
                    onChange={(e) => setEnvolvidos(e.target.value)} />
            </div>

            <div className="item flex">
                <label>
                    Impacto:
                </label>
                <input type="text"
                    placeholder="Quais serão os impactos positivos ?"
                    value={impacto}
                    onChange={(e) => setImpacto(e.target.value)} />
            </div>
            
             */