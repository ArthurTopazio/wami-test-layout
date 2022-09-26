import { FC } from 'react';

import NavBar from '../NavBar/NavBar';
import BurgerMenu from '../NavBar/BurgerMenu/BurgerMenu';
import HeaderLabel from './HeaderLabel/HeaderLabel';

import s from './Header.module.scss';

const Header: FC = () => {

  return (
    <div className={s.wrapper}>
      <div className={s.headerItems}>
        <HeaderLabel />
        <>
          <NavBar />
          <BurgerMenu />
        </>
      </div>
    </div>
  )
}

export default Header;
