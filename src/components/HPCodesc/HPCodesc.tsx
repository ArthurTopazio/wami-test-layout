import s from './HPCodesc.module.scss';

const HPCodesc = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <div className={s.boxItem1}>
          <p>Codesk.</p>
          <p>app</p>
        </div>
        <div className={s.boxItem2}>
          <div className={s.boxItem2_1}>Mobile app for Codesk</div>
          <div className={s.boxItem2_2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
        </div>
      </div>
    </div>
  )
}

export default HPCodesc;
