'use client'
import { useState, useRef } from 'react';

import NavBar from '../navBar/navBar';
import Submenu from '../submenu/submenu';


const Header =()=>{
    
    const getwidthScreen =()=>{
        const width = screen.width
        return (width);
    }

    const [screenUser,setScreenUser] = useState(getwidthScreen())
    const [openSubMenu, setOpenSubMenu] = useState(false)
    console.log(screenUser)

    return(
        <>
            <NavBar openSubMenu={openSubMenu} setOpenSubMenu={setOpenSubMenu} screenUser={screenUser} setScreenUser={setScreenUser}/>
            {openSubMenu?
            <Submenu display={'inline-block'}/>
            :
            <Submenu display={'hidden'}/>
            }
        </>
    )
}

export default Header;