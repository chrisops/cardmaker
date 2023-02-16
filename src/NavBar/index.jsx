import React from 'react'
import logo from '../assets/logo.jpg'

export default function NavBar() {
  return (
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand mr-2">
    <a class="navbar-item" href="/">
      <img src={logo} />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Sets
      </a>

      <a class="navbar-item">
        Decks
      </a>

      <a class="navbar-item">
        Cards
      </a>
    </div>
  </div>
</nav>
  )
}
