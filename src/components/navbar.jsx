import React from 'react'

export default function Navbar() {
  return (
    <div>
        <header className="header">
    <div className="container container--narrow">
      <a href="" className="header__logo">
        <img src="" alt="SIH logo" />
      </a>
      <nav className="header__nav">
        <input type="checkbox" id="responsive-menu" />
        <label for="responsive-menu" className="toggle-menu">
          <span>Menu</span>
          <div className="toggle-menu__lines"></div>
        </label>
        <ul className="header__menu">
          <li className="header__menuItem"><a href="">Developers</a></li>
          <li className="header__menuItem"><a href="">Projects</a></li>
          <li className="header__menuItem"><a href="">Inbox</a></li>
          <li className="header__menuItem"><a href="" className="btn btn--sub"> Create</a></li>
          <li className="header__menuItem"><a href="" className="btn btn--sub">Login/Sign Up</a></li>
        </ul>
      </nav>
    </div>
  </header>
      
    </div>
  )
}
