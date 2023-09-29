import styles from './MyButton.module.css';

const MyButton = (props) => {
  return (
    <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default MyButton