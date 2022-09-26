import s from './ProjectsPage.module.scss';
import wami from '../../assets/media/wami.png';

const ProjectsPage = () => {
  return (
    <div className={s.wrapper}>
      <img src={wami} alt="wami_img" />
      PROJECTS
    </div>
  )
}

export default ProjectsPage;

