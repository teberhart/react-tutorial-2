import styles from './Details.module.css';
import RecipeDetails from "./RecipeDetails.jsx";

export default function Details({detail}) {
    return (
        <div className={styles.main}>
            {
                (detail !== "") ?
                    <RecipeDetails recipe={detail} /> : "No recipe selected"
            }
        </div>
    );
}