import s from './HPInfoBlock.module.scss';

const HPInfoBlock = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <div className={s.boxItems}>
          <div className={s.boxItemsHead}>
            <div className={s.symbol}>~</div>
            Hours total
          </div>
          <div className={s.subText}>200</div>
        </div>
        <div className={s.boxItems}>
          <div className={s.boxItemsHead}>
            <div className={s.symbol}>~</div>
            Technical stack
          </div>
          <div className={s.stackItems}>
            <div className={s.stackItem}>Node.js</div>
            <div className={s.stackItem}>Java</div>
            <div className={s.stackItem}>Python</div>
            <div className={s.stackItem}>AWS</div>
            <div className={s.stackItem}>Microservices</div>
          </div>
        </div>
        <div className={s.boxItems}>
          <div className={s.boxItemsHead}>
            <div className={s.symbol}>~</div>
            Team
          </div>
          <div className={s.subText}>4 members</div>
        </div>
        <div className={s.boxItems}>
          <div className={s.boxItemsHead}>
            <div className={s.symbol}>~</div>
            Have a similar project?
          </div>
          <button className={s.btn}>Write us</button>
        </div>
      </div>
    </div>
  )
}

export default HPInfoBlock;
