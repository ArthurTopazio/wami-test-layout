import LoadableImage from '../LoadableImage/LoadableImage';
import s from './HPBanner.module.scss';

const HPBanner = () => {
  return (
    <div className={s.wrapper}>
      <LoadableImage src='http://35.242.230.163:3000/_next/static/media/fsightMain.9d639218.jpeg' />
    </div>
  )
}

export default HPBanner;
