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
    path={path}
    activePath={activePath}
    setActivePath={setActivePath}
    icon={icons[path]}
  />

  return (
    <nav class="bd-navbar navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand mr-2">
        <Link class="navbar-item" href="/">
          <img src={logo} />
        </Link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          {
            ["sets", "decks", "cards"].map(navLinks)
          }
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="#">
            Settings
          </a>
        </div>
      </div>
    </nav>
  )
}

