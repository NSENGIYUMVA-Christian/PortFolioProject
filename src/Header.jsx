import React from 'react'

const Header = () => {
  return (
    <header className='header' >
      <h2 className='header__h2' >ChrisDev</h2>
    <nav className='header__nav'>
        <ul className='header__ul'>
            <li><a>HOME   </a></li>
            <li><a>PROJECTS</a> </li>
            <li><a>CONTACT </a></li>
        </ul>
    </nav>
    </header>
  )
}

export default Header