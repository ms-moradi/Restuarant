import Link from 'next/link';

const MenuBar =({display})=>{
    return(
        <div className='bg-[#0f172b] px-4'>
            <ul className= {`${display} text-[#ffffff] gap-3 border-t-[.1px] border-[#93969f] lg:border-t-0 px-3 py-4`}> 
                <Link href="/"><li>HOME</li></Link>
                <Link href="/About"><li>ABOUT</li></Link>
                <Link href="/Services"><li>SERVICES</li></Link>
                <Link href="/Menu"><li>MENU</li></Link>
                <li>PAGES</li>
                <Link href="/Contact"><li>CONTACT</li></Link>
            </ul>
        </div>
    )    
    
}

export default MenuBar;