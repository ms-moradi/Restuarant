'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faBars } from "@fortawesome/free-solid-svg-icons";


//import components
import MenuBar from "../manuBar/menuBar";


//import font 
import { nunito } from "@/analytics/font/fonts";



const NavBar =({setOpenSubMenu, openSubMenu, screenUser, setScreenUser})=>{

    const [openMenu, setOPenMenu] = useState(false)
    const [displayMenu, setDisplayMenu] = useState('hidden')

    //handel open menu and display menubar
    const handelOpenMenu=()=>{
        setOPenMenu(current => !current)
        setDisplayMenu(openMenu? 'block': 'hidden')
        setOpenSubMenu(!openMenu && false)
    }
    

    return(
        <div className="fixed top-0 right-0 left-0">
            <div className="bg-[#0f172b] flex flex-row justify-between lg:items-center gap-2 px-[15px] lg:pl-[50px] lg:pr-[30px">
                <div className="flex justify-start items-center gap-2">
                    <FontAwesomeIcon icon={faUtensils} className="text-[#fea116] text-2xl lg:text-4xl"/>   
                    <h1 className={`${nunito.className} text-[#fea116] text-[26.8px] lg:text-[38px] font-extrabold not-italic `} >
                        Restuarant
                    </h1>
                </div>
                {screenUser< 1024 ?
                    <button onClick={handelOpenMenu} className=" text-[#93969f]">
                     <FontAwesomeIcon icon={faBars} className="text-[20px]" />
                    </button>
                :
                    <MenuBar display={'flex'} setOpenSubMenu={setOpenSubMenu}/>
                }
            </div>
            <div>
                <MenuBar display={displayMenu} setOpenSubMenu={setOpenSubMenu} screenUser={screenUser} openSubMenu={openSubMenu}/>
            </div>
        </div>
    )
}

export default NavBar;