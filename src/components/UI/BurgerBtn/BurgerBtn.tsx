import { FC } from "react";

import s from './BurgerBtn.module.scss';

interface BurgerBtnTPD {
  opened: boolean
};

const BurgerBtn: FC<BurgerBtnTPD> = ({ opened }) => {
  return (
    <button className={s.navToggle}>
      <span className={`${opened ? s.opened : null} ${s.barTop}`}></span>
      <span className={`${opened ? s.opened1 : null} ${s.barMid}`}></span>
      <span className={`${opened ? s.opened2 : null} ${s.barBot}`}></span>
    </button>
  )
};

export default BurgerBtn;
