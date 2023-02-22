import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

export default function NavLink(props) {

  return (
    <Link to={props.path} 
      className={`navbar-item ${props.activePath === props.path && 'is-active'} ${props.path}`}
      onClick={() => props.setActivePath(props.path)}
      onMouseEnter={animateOnHover}
    >
      <img src={props.icon} alt="Set icon" className="nav-icon mr-1-5" width={22}
        onAnimationEnd={endAnimation}
      />
      {_.capitalize(props.path)}
    </Link>
  )
}

const animateOnHover = (e) => {
  e.target.querySelector('.nav-icon')
    .classList.add('nav-icon-animate')
}
const endAnimation = (e) => {
  e.target.classList.remove('nav-icon-animate')
}
