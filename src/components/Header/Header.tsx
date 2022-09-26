import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

import s from './Header.module.scss';

const Header: FC = () => {

  const relocate = useNavigate();

  return (
    <div className={s.wrapper}>
      <div className={s.headerItems}>
        <div
          className={s.label}
          onClick={() => relocate('/')}
        >WAMISOFT</div>
        <>
          <NavBar />
          <div className={s.burgerMenu}>X</div>
        </>
      </div>
    </div>
  )
}

export default Header;
