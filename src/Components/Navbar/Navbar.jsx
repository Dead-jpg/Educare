import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const[sticky,setsticky]=useState(false);

  useEffect(()=>{

    window.addEventListener('scroll',()=>{
      window.scrollY > 600 ? setsticky(true):setsticky(false);

    })
  },[]);

  const [mobileMenu,setmobileMenu]= useState(false);


  
  const toggleMenu = ()=>{

     mobileMenu ? setmobileMenu(false) : setmobileMenu(true)
  }

  return (

    <nav className={`container ${sticky ? 'dark-nav':''} `}>
        <img src={logo} className='logo' alt=""/>
        <ul className={mobileMenu ? '' :'hide-menu-icon'}>
            <li><Link to='hero' smooth='true' offset={0} duration={500}> Home</Link></li>
            <li><Link to='program' smooth='true' offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth='true' offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth='true' offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth='true' offset={-290} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth='true' offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
          <img onClick={toggleMenu}  src={menu_icon} alt="" className='menu-icon' />
    </nav>
  )
}

export default Navbar