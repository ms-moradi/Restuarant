'use client'
import { useState, useEffect } from 'react';

import NavBar from '../navBar/navBar';
import Submenu from '../submenu/submenu';


const Header =()=>{

    
    const [screenUser,setScreenUser] = useState(0)
    const [openSubMenu, setOpenSubMenu] = useState(false)
    
    
    const handleResize = () => setScreenUser(window.innerWidth)
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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