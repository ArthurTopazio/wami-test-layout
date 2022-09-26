import s from './StartProject.module.scss';
import wami from '../../assets/media/wami.png';

const StartProjectPage = () => {
  return (
    <div className={s.wrapper}>
      <img src={wami} alt="wami_img" />
      START PROJECT
    </div>
  )
}

export default StartProjectPage;
