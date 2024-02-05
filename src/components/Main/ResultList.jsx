import ResultItem from "./ResultItem.jsx";

export default function ResultList({recipes, setDetails}) {
    return (
        <div>
            {recipes.map((recipe)=>
                <ResultItem key={recipe.id} item={recipe} setDetails={setDetails} />
            )}
        </div>
    );
}