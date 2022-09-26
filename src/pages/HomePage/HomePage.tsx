import HPBanner from '../../components/HPBanner/HPBanner';
import HPInfoBlock from '../../components/HPInfoBlock/HPInfoBlock';

import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <HPBanner />
      <HPInfoBlock />
      <div>CodescApp + banner</div>
      <div>Two half text #1</div>
      <div>Slider</div>
      <div>Two half text #1</div>
      <div>Other projects</div>
      <div>Finish line</div>
    </div>
  )
}

export default HomePage;
