import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationPaths } from '../../routes/paths';

import s from './NavBar.module.scss';

const NavBar: FC = () => {
  return (
    <div className={s.navBar}>
      <NavLink className={s.link} to={NavigationPaths.SERVICES_PAGE}>Services</NavLink>
      <NavLink className={s.link} to={NavigationPaths.PROJECTS_PAGE}>Projects</NavLink>
      <NavLink className={s.link} to={NavigationPaths.ABOUT_US_PAGE}>About us</NavLink>
      <NavLink className={s.link} to={NavigationPaths.CONTACTS_PAGE}>Contacts</NavLink>
      <div className={s.btn}>
        <NavLink className={s.link} to={NavigationPaths.NEW_PROJECT_FORM}>Start project</NavLink>
      </div>
    </div>
  )
}

export default NavBar;
