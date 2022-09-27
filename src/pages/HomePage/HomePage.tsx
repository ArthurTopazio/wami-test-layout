import HPBanner from '../../components/HPBanner/HPBanner';
import HPCodesc from '../../components/HPCodesc/HPCodesc';
import HPInfoBlock from '../../components/HPInfoBlock/HPInfoBlock';
import HPTwoHalfTxt from '../../components/HPTwoHalfTxt.tsx/HPTwoHalfTxt';
import { textHP } from '../../utils/consts/textHP';

import handPhone from '../../assets/media/handPhone.png';
import s from './HomePage.module.scss';
import LoadableImage from '../../components/LoadableImage/LoadableImage';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <HPBanner />
      <HPInfoBlock />
      <HPCodesc />
      <LoadableImage src={handPhone} />
      <HPTwoHalfTxt {...textHP[0]} />
      <LoadableImage src={handPhone} />
      <HPTwoHalfTxt {...textHP[1]} />
      {/* <div>Other projects</div>
      <div>Finish line</div> */}
    </div>
  )
}

export default HomePage;
