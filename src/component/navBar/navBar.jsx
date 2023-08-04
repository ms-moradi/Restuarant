'use client'

import { useState } from "react";

//import components
import MenuBar from "../manuBar/menuBar";

//import font 
import { nunito } from "@/analytics/font/fonts";



const NavBar =()=>{

    const [openMenu, setOPenMenu] = useState(false)
    const [displayMenu, setDisplayMenu] = useState('hidden')

    //handel open menu and display menubar
    const handelOpenMenu=()=>{
        setOPenMenu(current => !current)
        setDisplayMenu(openMenu? 'block': 'hidden')
    }

    return(
        <div className="block">
            <div className="bg-[#0f172b] flex flex-row justify-between gap-2 px-4 py-6">
                <h1 className={`${nunito.className} text-[#fea116] text-[26.8px] lg:text-[38px] font-extrabold not-italic `} >
                    Restuarant
                </h1>
                <button onClick={handelOpenMenu} className="text-[#93969f]  border-black">
                    Menu
                </button>
            </div>
            <div>
                <MenuBar display={displayMenu}/>
            </div>
        </div>
    )
}

export default NavBar;