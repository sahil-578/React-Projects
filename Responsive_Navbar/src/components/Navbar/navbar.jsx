import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'
import '../Navbar/navbar.css'

export const Navbar = () => {
    const [fullMenu, setFullMenu] = useState(false)
    return( 
        <nav>
            <Link to= '/' className='title'>Website</Link>
            <div className='menu'onClick={() => {
                setFullMenu(!fullMenu);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={fullMenu ? 'open' : '' }>
                <li><NavLink to= '/about'>About</NavLink></li>
                <li><NavLink to= '/services'>Services</NavLink></li>
                <li><NavLink to= '/contact'>Contact</NavLink></li>
            </ul>      
        </nav>
)
}