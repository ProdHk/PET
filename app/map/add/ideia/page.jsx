import FormAddIdeia from "@/components/form/addIdeia";


export default function AdicionarIdeiaPage() {


    return (
        <div className=" 
        w-screen h-screen flex-col m-auto
        content-center text-center items-center
         bg-zinc-100 text-zinc-800  ">
            <div>
                {/* SIDEBAR */}
            </div>
            <div>
                {/* HEADER */}
            </div>


            <div className=" flex h-4/6
             ">

                {/* FORM */}
                <FormAddIdeia />

            </div>
        </div>
    )
}