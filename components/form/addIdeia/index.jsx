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
        <div className="w-screen h-screen bg-white text-black flex-col
        text-center justify-evenly items-center
        ">
            <h2 className="text-2xl mt-5 font-bold">
                Aqui, a inovação é uma jornada conjunta
            </h2>
            <h4 className="text-lg mt-5">
                e cada contribuição é uma peça vital no quebra-cabeça do nosso sucesso. <br /> Sua participação não apenas
                fortalece nossa comunidade interna, mas também molda <br />o caminho para um ambiente mais eficiente,
                criativo e voltado para o crescimento.
            </h4>
            <div className="w-10/12 h-4/6 
            bg-yellow m-auto p-2">
                {/* SELECIONE A EMPRESA */}
                {/* item */}
                <div className="grid w-4/12  ">
                    <label>
                        Selecione uma empresa
                    </label>
                    <select className="text-center items-center flex">
                        <option>-Selecione uma opção-</option>
                        <option>J.Lemara</option>
                        <option>CIA.</option>
                    </select>
                </div>
                {/* ITEM */}

                {/* TITULO DA IDEIA */}
                <div className="grid w-4/12  ">
                    <label>
                        Adicione um título a sua ideia
                    </label>
                    <input type="text"
                        className="text-center items-center flex" />
                </div>

                {/* DESCRIÇÃO DETALHADA*/}
                <div className="w-4/12 h-2/6  items-start ">
                    <label>
                        Descreva sua ideia com mais detalhes
                    </label>
                    <input type="text"
                        className="text-center items-center flex w-11/12 m-auto h-4/6 " />
                </div>


            </div>
        </div>
    )



    // TITULO DA IDEIA

    // DESCRIÇÃO DETALHADA

    // SETORES ENVOLVIDOS

    // PESSOAS ENVOLVIDAS 

    // IMPACTO ESPERADO

    // PRIORIDADE

    // DATA LIMITE SUGERIDA

    // OBSERVAÇOES

    // BTN ENVIO



    // form







}
