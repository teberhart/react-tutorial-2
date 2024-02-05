import ResultItem from "./ResultItem.jsx";

export default function ResultList({results}) {
    return (
        <div>
            {results.map((item) =>
                <ResultItem item={item} />
            )}
        </div>
    );
}