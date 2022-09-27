import { FC } from 'react';

import s from './HPTwoHalfTxt.module.scss';

interface TwoHalfTPD {
  header: string,
  body: string
}

const HPTwoHalfTxt: FC<TwoHalfTPD> = ({ header, body }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <div className={s.boxItem1}>
          <div className={s.headerText}>{header}</div>
          <div className={s.bodyText}>{body}</div>
        </div>
        <div className={s.line}>
          <div className={s.circle1}></div>
          <div className={s.circle2}></div>
        </div>
        <div className={s.boxItem2}>
          <div className={s.headerText}>{header}</div>
          <div className={s.bodyText}>{body}</div>
        </div>
      </div>
    </div >
  )
}

export default HPTwoHalfTxt;
