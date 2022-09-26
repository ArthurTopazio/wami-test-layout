import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './HeaderLabel.module.scss';

const HeaderLabel: FC = () => {

  const relocate = useNavigate();

  return (
    <div
      className={s.label}
      onClick={() => relocate('/')}
    >
      WAMISOFT
    </div>
  )
}

export default HeaderLabel;
