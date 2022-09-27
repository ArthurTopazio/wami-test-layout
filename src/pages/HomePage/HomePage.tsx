import HPBanner from '../../components/HPBanner/HPBanner';
import HPCodesc from '../../components/HPCodesc/HPCodesc';
import HPInfoBlock from '../../components/HPInfoBlock/HPInfoBlock';
import HPTwoHalfTxt from '../../components/HPTwoHalfTxt.tsx/HPTwoHalfTxt';
import { textHP } from '../../utils/consts/textHP';

import handPhone from '../../assets/media/handPhone.png';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <HPBanner />
      <HPInfoBlock />
      <HPCodesc />
      <img src={handPhone} alt="img" />
      <HPTwoHalfTxt {...textHP[0]} />
      <img src={handPhone} alt="slider" />
      <HPTwoHalfTxt {...textHP[1]} />
      {/* <div>Other projects</div>
      <div>Finish line</div> */}
    </div>
  )
}

export default HomePage;
