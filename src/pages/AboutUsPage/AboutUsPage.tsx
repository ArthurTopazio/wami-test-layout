import s from './AboutUsPage.module.scss';
import wami from '../../assets/media/wami.png';

const AboutUsPage = () => {
  return (
    <div className={s.wrapper}>
      <img src={wami} alt="wami_img" />
      ABOUT US
    </div>
  )
}

export default AboutUsPage;
