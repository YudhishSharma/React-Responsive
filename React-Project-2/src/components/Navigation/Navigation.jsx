import styles from './Navigation.module.css';

const navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div>
            <img src="/images/logo-no-background.png" alt="" width="200px" height="72px" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default navigation