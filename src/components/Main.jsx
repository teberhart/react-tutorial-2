import styles from './Main.module.css';
import SearchBar from "./Main/SearchBar.jsx";
import {useState} from "react";
import ResultList from "./Main/ResultList.jsx";
import Details from "./Main/Details.jsx";

export default function Main() {
    const [results, setResults] = useState([]);
    const [details, setDetails] = useState([]);

    return (
        <div className={styles.main}>
            <SearchBar setResults={setResults} />
            <div className={styles.container}>
                <div className={styles.item}>
                    {
                        <ResultList recipes={results} setDetails={setDetails} />
                    }
                </div>
                <div className={styles.item}>
                    <Details details={details} />
                </div>
            </div>
        </div>
    );
}