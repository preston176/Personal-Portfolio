import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
    const [input, setInput] = useState("");

    const handleChange = (value: string) => {
        setInput(value);
    }

    return (
        <div className='bg-[#1a1a29] w-[100%] rounded-md h-[2.5rem] flex items-center shadow-2xl'>
            <FaSearch color="white" />
            <input placeholder="Type To Search ..." className="bg-transparent border-none h-[100%] w-[100%] ml-[12px] outline-none  text-white"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBar