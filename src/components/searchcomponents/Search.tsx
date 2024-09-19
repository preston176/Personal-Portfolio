import { useState } from "react";
import SearchBar from "./SearchBar";

const Search = () => {
    // Moved the useState hook inside the component
    const [search, setSearch] = useState<boolean>(true);

    return (
        <div className={`fixed inset-0 z-30 backdrop-blur-lg bg-slate-500/55 ${!search ? 'hidden' : ''}`}>
            <div className="pt-[20vh] w-[50%] mx-auto flex flex-col items-center min-w-[200px]">
                <SearchBar />

                <div>SearchResults</div>
            </div>
        </div>
    );
};

export default Search;
