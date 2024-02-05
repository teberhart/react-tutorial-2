import {useState} from "react";
import styles from './SearchBar.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchengin} from "@fortawesome/free-brands-svg-icons";

export default function SearchBar() {
    const [inputValue, setInput] = useState("");

    async function fetchRecipes (queryString) {
        const ENDPOINT = "https://api.spoonacular.com/recipes/complexSearch";
        const APIKEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
        const query = `${ENDPOINT}?apiKey=${APIKEY}&query=${queryString}`;

        const results = await fetch(query);
        const data = await results.json();

        // data looks like
        /*
        data:
        [
            "number": 10,
            "offset": 0,
            "results": [
                0 [
                    "id": 1234
                    "image": "http://image.com/image.jpg"
                    "imageType": "jpg"
                    "title": "Cool recipe"
                ]
            ],
            "totalResults": 35
        ]
         */
    }

    // Using a button, to avoid having multiple calls burning through the API's daily request limit
    function handleSubmit(e) {
        e.preventDefault();
        fetchRecipes(inputValue).then(r => setInput(""));
    }

    return (
        <div className={styles.main}>
            <input
                className={styles.input}
                type="text"
                value={inputValue}
                placeholder="Type to search for recipes"
                onChange={(e)=>setInput(e.target.value)}
            />
            <button
                className={styles.button}
                onClick={(e) => handleSubmit(e)}>
                <FontAwesomeIcon icon={faSearchengin} />
            </button>
        </div>
    );
}