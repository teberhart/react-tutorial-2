import styles from './ResultItem.module.css';

export default function ResultItem({item, setDetailId}) {
    function handleClick(e) {
        e.preventDefault();
        setDetailId(item.id);
    }

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <p>{item.title}</p>
            </div>
            <img className={styles.image} src={item.image} alt={item.title}/>
            <div><button
                className={styles.button}
                onClick={(e)=>handleClick(e)}
            >Show details</button></div>
        </div>
    );
}