import s from './ContactsPage.module.scss';
import wami from '../../assets/media/wami.png';

const ContactsPage = () => {
  return (
    <div className={s.wrapper}>
      <img src={wami} alt="wami_img" />
      CONTACTS
    </div>
  )
}

export default ContactsPage;
