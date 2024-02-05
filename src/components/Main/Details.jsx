import styles from './Details.module.css';
import RecipeDetails from "./RecipeDetails.jsx";

export default function Details({details}) {
    return (
        <div className={styles.main}>
            {details.length}
            {
                (details.length > 0) ?
                    <RecipeDetails recipe={details} /> : "No recipe selected"
            }
        </div>
    );
}