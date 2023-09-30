import MyButton from '../MyButton/MyButton';
import styles from './ContactForm.module.css';
import { MdMessage } from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
import { useState } from 'react';
const ContactForm = () => {

  const [name, setName] = useState("HelloWorld");
  const [email, setEmail] = useState("ok@gmail.com");
  const [text, setText] = useState("hello");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <MyButton text="VIA SUPPORT CHAT" icon={<MdMessage textSize="24px"/>}/>
            <MyButton text="VIA CALL" icon={<FaPhoneAlt textSize="24px"/>}/>
          </div>
          <MyButton 
          isOutline={true}
          text="VIA EMAIL FORM" 
          icon={<HiMail textSize="24px"/>}/>

          <form onSubmit={onSubmit} action="">
            <div className={styles.form_controller}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_controller}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_controller}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="8"/>
            </div>
            <div style={
              {
                display: "flex",
                justifyContent: "end",
              }
            }>
              <MyButton text="SUBMIT" />
            </div>
            <div>{name +" "+email+" "+text}</div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="./images/contact.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm