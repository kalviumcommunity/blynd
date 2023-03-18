import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons8-menu.svg'
// import { ReactComponent as Brand } from '../../assets/image 2.svg'
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {


  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const { loginWithRedirect } = useAuth0();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/assets/image 2.svg" alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="/assets/icons8-menu.svg" alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
            <li>
              <NavLink to="/learn">Learn</NavLink>
            </li>
            <li>
              <NavLink to="/safety">Safety</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <button id='signin' onClick={() => loginWithRedirect()} > Sign in</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar