import React from 'react'
import _ from 'lodash'

export default function NavLink(props) {
  const animateOnHover = (e) => {
    e.target.querySelector('.nav-icon')
      .classList.add('nav-icon-animate')
  }
  const endAnimation = (e) => {
    e.target.classList.remove('nav-icon-animate')
  }
  const active = props.activePath === props.path

  return (
    <a class={`navbar-item ${props.activePath === props.path && 'is-active'}`} href={`/${props.path}`}
      onClick={() => props.setActivePath(props.path)}
      onMouseEnter={animateOnHover}
    >
      <img src={props.icon} alt="Set icon" class="nav-icon mr-1-5" width={22}
        onAnimationEnd={endAnimation}
      />
      {_.capitalize(props.path)}
    </a>
  )
}
