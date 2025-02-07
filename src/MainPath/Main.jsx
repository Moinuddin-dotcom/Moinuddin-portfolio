import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar"


const Main = () => {
    return (
        <div className='poppins bg-black text-white' >
           
           <nav className="">
           <Navbar />
           </nav>
            <section className='py-20'>
                <Outlet />
            </section>

        </div>
    )
}

export default Main
