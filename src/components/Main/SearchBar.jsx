import {useState} from "react";

export default function SearchBar() {
    const [inputValue, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setInput("");
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                placeholder="Type to search for recipes"
                onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    );
}