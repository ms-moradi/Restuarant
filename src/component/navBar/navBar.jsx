'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils
} from "@fortawesome/free-solid-svg-icons";


//import components
import MenuBar from "../manuBar/menuBar";

//import font 
import { nunito } from "@/analytics/font/fonts";



const NavBar =()=>{

    const [openMenu, setOPenMenu] = useState(false)
    const [displayMenu, setDisplayMenu] = useState('hidden')
    const [screenUser, setScreenUser] = useState(screen.availWidth)

    //get the user's screen size

    // if(widthUserScreen<1424){
    //     setScreenUser(true)
    // }else{
    //     setScreenUser(false)
    // }

    //handel open menu and display menubar
    const handelOpenMenu=()=>{
        setOPenMenu(current => !current)
        setDisplayMenu(openMenu? 'block': 'hidden')
    }
    console.log(screenUser)

    return(
        <div>
            <div className="bg-[#0f172b] flex flex-row justify-between gap-2 px-6 py-4">
                <div className="flex justify-start items-center gap-2">
                    <FontAwesomeIcon icon={faUtensils} className="text-[#fea116] sm:text-2xl lg:text-4xl"/>   
                    <h1 className={`${nunito.className} text-[#fea116] text-[26.8px] lg:text-[38px] font-extrabold not-italic `} >
                        Restuarant
                    </h1>
                </div>
                {screenUser< 1024 ?
                    <button onClick={handelOpenMenu} className="text-[#93969f]  border-black">
                     Menu
                    </button>
                :
                    <MenuBar display={'flex'}/>
                }
            </div>
            <div className="">
                <MenuBar display={displayMenu}/>
            </div>
        </div>
    )
}

export default NavBar;