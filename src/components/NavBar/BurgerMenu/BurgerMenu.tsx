import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationPaths } from '../../../routes/paths';
import BurgerBtn from '../../UI/BurgerBtn/BurgerBtn';

import s from './BurgerMenu.module.scss';

const BurgerMenu: FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={s.burgerMenu}
      onClick={() => setIsOpen(!isOpen)}
    >
      <BurgerBtn opened={isOpen} />
      <div
        className={`${s.sideNav} ${isOpen ? s.sideNavOpen : null}`}
      >
        <div className={s.navBar}>
          <NavLink className={s.link} to={NavigationPaths.SERVICES_PAGE}>Services</NavLink>
          <NavLink className={s.link} to={NavigationPaths.PROJECTS_PAGE}>Projects</NavLink>
          <NavLink className={s.link} to={NavigationPaths.ABOUT_US_PAGE}>About us</NavLink>
          <NavLink className={s.link} to={NavigationPaths.CONTACTS_PAGE}>Contacts</NavLink>
          <NavLink className={s.link} to={NavigationPaths.NEW_PROJECT_FORM}>Start project</NavLink>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu;
