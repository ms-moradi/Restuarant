'use client'
import Link from 'next/link';


const MenuBar =()=>{
    return(
        <>
        <ul>
            <Link href="/"><li>HOME</li></Link>
            <Link href="/About"><li>ABOUT</li></Link>
            <Link href="/Services"><li>SERVICES</li></Link>
            <Link href="/Menu"><li>MENU</li></Link>
            <li>PAGES</li>
            <Link href="/Contact"><li>CONTACT</li></Link>
        </ul>
        </>
    )
}

export default MenuBar;