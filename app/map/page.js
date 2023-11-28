import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function MapPage() {
    <Link href={''}>

    </Link>

    return (
        <div className="w-screen h-screen flex">
            <Sidebar />
            <div className="flex w-11/12 h-auto ">

                {/* Header */}
                <div className=" text-black bg-white p-5 
                flex h-20 w-full
                justify-between items-center
                ">
                    <Link href={'/map/add'}
                        className="w-1/12 bg-yellow p-2 rounded
                    hover:p-1 transition-all text-center items-center
                    justify-center flex
                    " >

                        Adicionar

                    </Link>


                    <Link href={'/map/edit'} className="w-1/12 bg-yellow p-2 rounded
                    hover:p-1 transition-all text-center items-center
                    justify-center flex
                    " >
                        Editar
                    </Link>


                    <Link href={''} className="w-1/12 bg-yellow p-2 rounded
                    hover:p-1 transition-all text-center items-center
                    justify-center flex
                    " >
                        Pontuação
                    </Link>



                </div>
            </div>
        </div >
    )
}