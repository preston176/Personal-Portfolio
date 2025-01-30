import { Link } from "../Header/Links";


interface Props {
    results: Link[];
}


const SearchResults: React.FC<Props> = ({ results }) => {

    return (
        <div className="w-full bg-white shadow-lg rounded-sm mt-4 max-h-[300px] overflow-y-scroll">
            {results.length ? (
                <ul className="divide-y divide-gray-200">
                    {results.map((result: Link, index: number) => (
                        <li
                            key={index}
                            className="p-4 hover:bg-gray-100 flex items-center space-x-4 transition-colors duration-200"
                        >
                            <a href={`/#${result.link}`} className="flex items-center">
                                <div className="flex-shrink-0">
                                    <span className="inline-block w-8 h-8 bg-[#1a1a29] rounded-full text-center place-content-center font-bold text-white">
                                        {result.name?.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold text-gray-800 px-3">
                                        {result.name}
                                    </h2>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="p-4 text-gray-500">No results found.</div>
            )}
        </div>
    );
};

export default SearchResults;
