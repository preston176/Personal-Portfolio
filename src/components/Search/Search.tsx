import { useContext, useEffect } from "react";
import SearchBar from "./SearchBar";
import { GlobalContext } from "../../context/GlobalContext";


const Search = () => {

    const { search, setSearch } = useContext(GlobalContext);

    useEffect(() => {
        if (search) {
            // Prevent body from scrolling when the search dialog is open
            document.body.style.overflow = "hidden";
        } else {
            // Re-enable body scrolling when the search dialog is closed
            document.body.style.overflow = "";
        }

        // Cleanup function to ensure body scroll is restored if component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [search]);

    return (
        <div
            className={`fixed inset-0 z-30 backdrop-blur-lg bg-slate-500/55 ${!search ? 'hidden' : ''}`}
            onClick={() => setSearch(false)} // Close search when clicking outside
        >
            <div
                className="mt-[20vh] w-[50%] mx-auto flex flex-col items-center min-w-[200px] max-h-[100vh]"
                // Prevent close when clicking inside
                onClick={(e) => e.stopPropagation()}
            >
                <SearchBar />
            </div>
        </div>
    );
};

export default Search;
