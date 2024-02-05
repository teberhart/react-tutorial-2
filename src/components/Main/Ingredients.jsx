import IngredientCard from "./IngredientCard.jsx";
import styles from './Ingredients.module.css';

export default function Ingredients({list}) {
    return (
        <div className={styles.main}>
            {
                list.map((item) => <div>{item}</div>)
                /*(list.length > 0) ?
                    list.map((ingredient) =>
                        <div>
                            <IngredientCard ingredientDetail={ingredient} />
                        </div>
                    ) :
                    <></>*/
            }
        </div>
    );
}