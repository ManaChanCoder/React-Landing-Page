import './Navbar.css'
import { useState } from 'react';
import Logo from '../assets/image/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = (props) => {

  const [toggle, setToggle] = useState(false)

  const closeMenu = () => {
    setToggle(false)
  }
  const openMenu = () => {
    setToggle(true)
  }

  
  return (
    <div className='box-shadow'>
      <div className='navbar'>
        <div className='logo'>
          <img src={Logo} alt="" />
        </div>

        <div className='menu'>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">chicken</a></li>
            <li><a href="#">pork</a></li>
            <li><a href="#">vegetables</a></li>
            <li><a href="#">dessert</a></li>
            <li><a href="#">contacts</a></li>
          </ul>
        </div>

        <div className='icon-menu'>
          {toggle ? (
            <IoClose className='close-menu' onClick={closeMenu} size={30} />
          ):(
            <CiMenuFries className='open-menu' onClick={openMenu} size={30} />
          )}
        </div>

      </div>

      <div className='sub-menu'>
          {toggle ? (
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">chicken</a></li>
              <li><a href="#">pork</a></li>
              <li><a href="#">vegetables</a></li>
              <li><a href="#">dessert</a></li>
              <li><a href="#">contacts</a></li>
          </ul>
          ):(
            <div></div>
          )}
      </div>

    </div>
  )
}

export default Navbar
