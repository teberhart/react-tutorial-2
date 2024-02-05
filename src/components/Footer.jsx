import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.main}>
            <span className={styles.item}>
                Created based on Code Stoic's tutorial<br/>
                API provided by Spoonacular
            </span>
            <span className={styles.item}>
                All Rights Reserved, 2024
            </span>
        </div>
    );
}