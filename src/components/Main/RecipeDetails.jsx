import {useEffect, useState} from "react";
import styles from './RecipeDetails.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faHeart, faPeopleGroup, faSeedling, faStar, faUtensils} from "@fortawesome/free-solid-svg-icons";
import Ingredients from "./Ingredients.jsx";
import Instructions from "./Instructions.jsx";

export default function RecipeDetails({recipe}) {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        async function fetchDetails(id) {
            const ENDPOINT = "https://api.spoonacular.com/recipes/";
            const APIKEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
            const query = `${ENDPOINT}${id}/information?apiKey=${APIKEY}`;

            const results = await fetch(query);
            return await results.json();
        }
        fetchDetails(recipe).then(r => setDetails(r));
    }, [recipe])

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={details.image} alt={details.title}/>
            </div>
            <div className={styles.recipeDetails}>
                <div className={styles.iconContainer}>
                    <div className={styles.detailsTitle}><FontAwesomeIcon icon={faUtensils}/></div>
                    <div className={styles.detailsTitle}>{details.title}</div>
                </div>
                <div className={styles.iconContainer}>
                    <div className={styles.detailsServings}><FontAwesomeIcon icon={faPeopleGroup}/></div>
                    <div className={styles.detailsServings}>Servings : {details.servings} people</div>
                </div>
                <div className={styles.iconContainer}>
                    <div className={styles.detailsTime}><FontAwesomeIcon icon={faClock} /></div>
                    <div className={styles.detailsTime}>Ready in {details.readyInMinutes} minutes</div>
                </div>
            </div>
            <div className={styles.scores}>
                <div className={styles.iconContainer}>
                    <div className={styles.scoresDetail}><FontAwesomeIcon icon={faSeedling}/></div>
                    <div className={styles.scoresDetail}>Health score : {details.healthScore}</div>
                </div>
                <div className={styles.iconContainer}>
                    <div className={styles.scoresDetail}><FontAwesomeIcon icon={faHeart}/></div>
                    <div className={styles.scoresDetail}>Liked by : {details.aggregateLikes} people</div>
                </div>
                <div className={styles.iconContainer}>
                    <div className={styles.scoresDetail}><FontAwesomeIcon icon={faStar}/></div>
                    <div className={styles.scoresDetail}>Overall score : {Math.round(details.spoonacularScore * 100)/100}</div>
                </div>
            </div>
            <div className={styles.ingredients}>
                {
                    details.extendedIngredients !== "" ?
                        <Ingredients list={details.extendedIngredients} /> :
                        <></>
                }
            </div>
            <div className={styles.instructions}>
                <Instructions list={details.instructions} />
            </div>
            <div className={styles.winePairings}>
                WINE PAIRING
            </div>
        </div>
    );
}