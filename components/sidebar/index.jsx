import Link from "next/link";


export default function Sidebar(props) {


    return (
        <div className="w-1/12 h-screen  grid grid-cols-1 
       cols-
         
        bg-blue" >
            <div className="m-auto w-20 h-20 bg-yellow">
                {/* LOGO */}
            </div>

            <div className=" grid grid-cols-1 justify-between m-auto w-20 h-4/5 bg-gray">
                {/* MENU */}
                <Link href={"/vistorias"}>
                    <div className=" flex text-center justify-center items-center h-20 bg-yellow">
                        Vistorias
                    </div>
                </Link>
                <Link href={"/map"}>
                    <div className=" flex text-center justify-center items-center h-20 bg-yellow">
                        Map
                    </div>
                </Link>
                <div className="h-20 bg-yellow" />
            </div>
        </div>)
}