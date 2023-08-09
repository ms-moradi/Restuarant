'use client'
import { useState } from 'react';

import NavBar from '../navBar/navBar';
import Submenu from '@/component/submenu/submenu';


const Header =()=>{

    const [screenUser,setScreenUser] = useState(screen.availWidth)
    const [openSubMenu, setOpenSubMenu] = useState(false)


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