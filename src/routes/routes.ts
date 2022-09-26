import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import HomePage from '../pages/HomePage/HomePage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import StartProjectPage from '../pages/StartProjectPage/StartProjectPage';

import { NavigationPaths } from './paths';

export interface IRoute {
  path: string,
  component: any
};

export const publicRoutes: IRoute[] = [
  { path: NavigationPaths.ABOUT_US_PAGE, component: AboutUsPage },
  { path: NavigationPaths.CONTACTS_PAGE, component: ContactsPage },
  { path: NavigationPaths.HOME_PAGE, component: HomePage },
  { path: NavigationPaths.NEW_PROJECT_FORM, component: StartProjectPage },
  { path: NavigationPaths.PROJECTS_PAGE, component: ProjectsPage },
  { path: NavigationPaths.SERVICES_PAGE, component: ServicesPage }
];