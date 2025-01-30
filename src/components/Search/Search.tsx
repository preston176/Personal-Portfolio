import SearchBar from "./SearchBar";


const Search = () => {


    return (
        <div
            className={`fixed inset-0 z-30 backdrop-blur-lg bg-slate-500/55`}
            
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
