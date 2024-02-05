import styles from './IngredientCard.module.css';

export default function IngredientCard({ingredientDetail}) {
    const displayNameArray = ingredientDetail.name.split(" ");
    const displayName = displayNameArray.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                {displayName}
            </div>
            <div>
                <img
                    className={styles.image}
                    src={"https://spoonacular.com/cdn/ingredients_250x250/" + ingredientDetail.image}
                    alt={ingredientDetail.name}
                />
            </div>
            <div className={styles.content}>
                Quantity : {ingredientDetail.measures.us.amount + " " + ingredientDetail.measures.us.unitLong}
            </div>
        </div>
    );
}