import styles from './Main.module.css';
import SearchBar from "./Main/SearchBar.jsx";
import {useState} from "react";
import ResultList from "./Main/ResultList.jsx";
import Details from "./Main/Details.jsx";

export default function Main() {
    const [results, setResults] = useState([]);

    return (
        <div className={styles.main}>
            <SearchBar setResults={setResults} />
            <div className={styles.container}>
                <div className={styles.item}>
                    {
                        <ResultList recipes={results} />
                    }
                </div>
                <div className={styles.item}>
                    <Details/>
                </div>
            </div>
        </div>
    );
}