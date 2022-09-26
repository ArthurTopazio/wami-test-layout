import s from './ServicesPage.module.scss';
import wami from '../../assets/media/wami.png';

const ServicesPage = () => {
  return (
    <div className={s.wrapper}>
      <img src={wami} alt="wami_img" />
      SERVICES
    </div>
  )
}

export default ServicesPage;
