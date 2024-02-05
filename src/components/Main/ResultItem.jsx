import styles from './ResultItem.module.css';

export default function ResultItem({item, setDetails}) {
    async function fetchDetails(id) {
        const ENDPOINT = "https://api.spoonacular.com/recipes/";
        const APIKEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
        const query = `${ENDPOINT}${id}/information?apiKey=${APIKEY}`;

        const results = await fetch(query);
        return await results.json();
    }

    async function handleClick(e) {
        e.preventDefault();
        const details = await fetchDetails(item.id);
        console.log(details);
        setDetails(details);
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