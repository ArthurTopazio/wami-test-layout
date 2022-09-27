import HPBanner from '../../components/HPBanner/HPBanner';
import HPCodesc from '../../components/HPCodesc/HPCodesc';
import HPInfoBlock from '../../components/HPInfoBlock/HPInfoBlock';
import handPhone from '../../assets/media/handPhone.png';

import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <HPBanner />
      <HPInfoBlock />
      <HPCodesc />
      <img src={handPhone} alt="img" />
      <div>Two half text #1</div>
      <img src={handPhone} alt="slider" />
      <div>Two half text #1</div>
      <div>Other projects</div>
      <div>Finish line</div>
    </div>
  )
}

export default HomePage;
