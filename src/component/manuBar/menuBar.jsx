import Link from 'next/link';

const MenuBar =({display})=>{
    return(
        <div className={`${display}`}>
            <ul className='block'> 
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