import React from 'react'
import _ from 'lodash'

export default function NavLink(props) {
  return (
    <a class={`navbar-item ${props.activePath}`} href={`/${props.path}`}>
      <img src={props.icon} alt="Set icon" class="nav-icon mr-1-5" width={22} />
      {_.capitalize(props.path)}
    </a>
  )
}
