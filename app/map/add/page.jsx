import Link from "next/link";

export default function AdicionarInteracaoPage() {


    return (
        <div className="w-screen h-screen bg-gray
        flex text-center items-center justify-evenly">
            <div className="w-9/12 h-5/6 p-5 text-black
            flex-col items-center text-center">
                <div className="w-8/12 m-auto flex-col h-3/6">
                    <h2 className="text-3xl font-medium m-5">
                        Contribua para o Crescimento da empresa
                    </h2>
                    <h4 className="text-xl mr-5 ml-5 text-center">
                        Sua opinião é valiosa para nós! Escolha uma opção
                        abaixo para <br /> nos contar como podemos melhorar juntos.
                    </h4>
                </div>
                <div className=" text-white m-auto w-full h-1/5 bg-gray flex text-center items-center justify-between">
                    <Link href={"add/ideia"}
                        className="p-5 bg-black rounded-xl  
                        hover:p-4 transition-all
                        flex text-center items-center justify-center">
                        Adicionar uma Ideia
                    </Link>
                    <Link href={"map/add/melhoria"}
                        className="p-5 bg-black rounded-xl  
                        hover:p-4 transition-all
                        flex text-center items-center justify-center">
                        Adicionar uma Melhoria
                    </Link>
                    <Link href={"add/ocorrencia"}
                        className="p-5 bg-black rounded-xl 
                        hover:p-4 transition-all
                        flex text-center items-center justify-center">
                        Reportar uma Ocorrência
                    </Link>
                </div>
            </div>

        </div >
    )
}


/* 


*/