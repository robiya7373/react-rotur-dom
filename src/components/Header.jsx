import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Header>
        <nav>
            <ul>
                <li><NavLink to='/overview'>sasa</NavLink></li>
                <li><NavLink to='/ticket'>sd</NavLink></li>
            </ul>
        </nav>
    </Header>
  )
}

export default Header