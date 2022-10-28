import React from 'react'
import{Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
   <>
   
   <div className="Navbar">
<div className="logo">
  <Link className='Logo' to='/'>NAfu</Link>
</div>
<div className="Nav">
 <Link className='Logo'  to='/'>Home</Link>
 <Link className='Logo' to='about'>About</Link>
 <Link className='Logo' to='services'>Services</Link>
 <Link className='Logo' to='contact'>Contact</Link>
</div>

   </div>
   
   
   
  </>
)}

export default Header