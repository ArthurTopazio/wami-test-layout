import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.headerItems}>
        <div className={s.label}>WAMISOFT</div>
        <div className={s.navBar}>
          <a>Services</a>
          <a>Projects</a>
          <a>About us</a>
          <a>Contacts</a>
          <a>Start project</a>
          <div className={s.burgerMenu}>X</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
