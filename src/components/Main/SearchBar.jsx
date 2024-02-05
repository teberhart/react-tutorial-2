import {useState} from "react";
import styles from './SearchBar.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchengin} from "@fortawesome/free-brands-svg-icons";

export default function SearchBar() {
    const [inputValue, setInput] = useState("");

    // Using a button, to avoid having multiple calls burning through the API's daily request limit
    function handleSubmit(e) {
        e.preventDefault();
        setInput("");
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