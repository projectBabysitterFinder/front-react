import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../sass/header.scss';
import '../../sass/menu.scss';

const Index = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='header'>
      <Link to='/'><img className='header__logo' src={logo} alt='Babysitter Finder' /></Link>
      <span
        className='header--hamburger material-icons'
        onClick={() => setOpenMenu(!openMenu)}
      >
        menu
      </span>
      <nav className={!openMenu ? 'navigation' : 'navigation navigation-open'}>
        <div className='navigation__profile'>
          <span className='material-icons navigation--icon'>
            account_circle
          </span>
          <Link to='/'> Nombre de usuario </Link>
          <Link to='/'>Cerrar Sesión</Link>
        </div>
        <ul className='navigation__ul'>
          <li className='navigation__li'>
            <Link className='navigation__link' to='/'>
              Loguin
            </Link>
          </li>
          <li className='navigation__li'>
            <Link className='navigation__link' to='/'>
              Contact
            </Link>
          </li>
          <li className='navigation__li'>
            <Link className='navigation__link' to='/'>
              Item 1
            </Link>
          </li>
          <li className='navigation__li'>
            <Link className='navigation__link' to='/'>
              Item 2
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Index;
