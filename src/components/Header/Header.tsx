
import { Link } from 'react-scroll';
import { links } from './Links';



const Header = () => {

    return (
        <div className="w-full max-w-7xl">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                {/* Logo */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <img className='w-28' src="/assets/logos/PrestonM.png" alt="Logo" />
                </div>

                {/* Mobile menu icon */}
                {/* <div
                    onClick={toggleMenu}
                    className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute z-10"
                    aria-label="Open search"
                >
                    <FaSearch
                        color='white'
                        size={20}
                    />
                </div> */}

                {/* Navbar */}
                <ul className={`md:flex md:items-center md:static hidden md:w-auto w-full left-0 transition-all duration-500 ease-in-out z-10 cursor-pointer`}>
                    {/* Search Icon */}

                    {links.map((item, index) => (
                        <li
                            key={index}
                            className="md:ml-8 md:my-0 my-7 font-semibold"
                        >
                            {item.link?.startsWith('http') ? (
                                <a
                                    href={item.link}
                                    className="text-white transition-all duration-500 hover:text-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    to={item.link}
                                    className="text-white transition-all duration-500 hover:text-primary"
                                    smooth={true}
                                    offset={-70} // Offset for sticky header
                                    duration={500}
                                
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
