import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import SearchResults from "./SearchResults";
import { Link, links } from "../Header/Links";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState<Link[]>(links);

    const handleChange = (value: string) => {
        setInput(value);
        // Filter links based on the input value
        const filteredResults = links.filter((link) =>
            link.name?.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filteredResults);
    };
    return (
        <>
            <div className='bg-[#1a1a29] w-[100%] rounded-md h-[2.5rem] flex items-center shadow-2xl px-4'>
                <FaSearch color="white"/>
                <input placeholder="Type To Search ..." className="bg-transparent border-none h-[100%] w-[100%] ml-[12px] outline-none  text-white"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />


            </div>
            <SearchResults results={results} />
        </>
    )
}

export default SearchBar