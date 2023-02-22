import React from 'react'
import logo from 'assets/logo.jpg'
import './styles.scss'
import decksIcon from 'assets/decksIcon.png'
import cardsIcon from 'assets/cardsIcon.png'
import setsIcon from 'assets/setsIcon.png'
import NavLink from './NavLink'
import { Link } from 'react-router-dom';

export default function NavBar() {
  const icons = {
    sets: setsIcon,
    decks: decksIcon,
    cards: cardsIcon
  }
  const [activePath, setActivePath] = React.useState("/")
  const navLinks = (path) => <NavLink
    key={path}
    path={path}
    activePath={activePath}
    setActivePath={setActivePath}
    icon={icons[path]}
  />

  return (
    <nav className="bd-navbar navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand mr-2">
        <Link to="/" className="navbar-item">
          <img src={logo} />
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {
            ["sets", "decks", "cards"].map(navLinks)
          }
        </div>
        <div className="navbar-end">
          <a className="navbar-item" href="#">
            Settings
          </a>
        </div>
      </div>
    </nav>
  )
}

