'use client'

import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Button from '../button/button';
import Submenu from '../submenu/submenu';

const linkMenu = [
    {id:1, name:'HOME', href:'/'},
    {id:2, name:'ABOUT', href:'/About'},
    {id:3, name:'SERVICES', href:'/Services'},
    {id:4, name:'MENU', href:'/Menu'},
    {id:5, name:'PAGES', href:''},
    {id:6, name:'CONTACT', href:'/Contact'},
]

const MenuBar =({display, setOpenSubMenu, screenUser,openSubMenu})=>{

    const handleSubMenu =()=>{
        setOpenSubMenu(current => !current)
    }

    return(
        <div className='bg-[#0f172b] px-4 relative'>
            <ul className= {`${display} lg:items-center text-[#ffffff] gap-6 border-t-[.1px] border-[#93969f] lg:border-t-0 px-3 py-1 `}> 
                <Link href="/">
                    <li className='hover:text-[#fea116] cursor-pointer'>HOME</li>
                </Link>
                <Link href="/About">
                    <li className='hover:text-[#fea116] cursor-pointer'>ABOUT</li>
                </Link>
                <Link href="/Services">
                    <li className='hover:text-[#fea116] cursor-pointer'>SERVICES</li>
                </Link>
                <Link href="/Menu">
                    <li className='hover:text-[#fea116] cursor-pointer'>MENU</li>
                </Link>
                <li 
                    onClick={handleSubMenu} 
                    className=' relative '
                >
                    <div className='flex justify-start items-center gap-2 hover:text-[#fea116] cursor-pointer'>
                        PAGES 
                        <FontAwesomeIcon icon={faCaretDown} className='text-[#fff] hover:text-[#fea116]'/>
                    </div>
                </li>
                    {(screenUser<1024 && openSubMenu) ?
                    <Submenu display={'block'}/>
                    :
                    <Submenu display={'hidden'}/>
                    }
                <Link href="/Contact">
                    <li className='hover:text-[#fea116] cursor-pointer'>CONTACT</li>
                </Link>
                <Button title={'BOOK A TABLE'} width={'w-[150px]'} height={'h-[50px]'}/>
            
            </ul>
        </div>
    )    
    
}

export default MenuBar;