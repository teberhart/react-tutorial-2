import ResultItem from "./ResultItem.jsx";

export default function ResultList({recipes, setDetailId}) {
    return (
        <div>
            {recipes.map((recipe)=>
                <ResultItem key={recipe.id} item={recipe} setDetailId={setDetailId} />
            )}
        </div>
    );
}