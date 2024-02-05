import styles from './Main.module.css';
import SearchBar from "./Main/SearchBar.jsx";
import {useState} from "react";
import ResultList from "./Main/ResultList.jsx";

export default function Main() {
    const [results, setResults] = useState([]);

    return (
        <div className={styles.main}>
            <SearchBar />
            <ResultList results={results} />
        </div>
    );
}