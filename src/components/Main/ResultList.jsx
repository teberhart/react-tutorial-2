import ResultItem from "./ResultItem.jsx";

export default function ResultList({recipes}) {
    return (
        <div>
            {recipes.map((recipe)=>
                <ResultItem key={recipe.id} item={recipe} />
            )}
        </div>
    );
}