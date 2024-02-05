import styles from './ResultItem.module.css';

export default function ResultItem({item}) {
    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <div className={styles.card}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title}/>
            <div><button
                className={styles.button}
                onClick={(e)=>handleClick(e)}
            >Show details</button></div>
        </div>
    );
}