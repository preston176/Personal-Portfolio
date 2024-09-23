import { useContext } from 'react';
import { Link } from 'react-scroll';
import { FaSearch } from 'react-icons/fa';
import { links } from './Links';
import { GlobalContext } from '../../context/GlobalContext';


const Header = () => {
    const { setOpen, setSearch } = useContext(GlobalContext);


    const toggleMenu = () => {
        setSearch(true);
    };

    const closeMenu = () => {
        setSearch(false);
        setOpen(false); // Function to close the mobile menu
    };

    return (
        <div className="w-full max-w-7xl">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                {/* Logo */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <img className='w-28' src="/assets/logos/PrestonM.png" alt="Logo" />
                </div>

                {/* Mobile menu icon */}
                <div
                    onClick={toggleMenu}
                    className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute z-10"
                    aria-label="Open search"
                >
                    <FaSearch
                        color='white'
                        size={20}
                    />
                </div>

                {/* Navbar */}
                <ul className={`md:flex md:items-center md:static hidden md:w-auto w-full left-0 transition-all duration-500 ease-in-out z-10`}>
                    {/* Search Icon */}
                    <li className="md:ml-8 md:my-0 my-7">
                        <FaSearch
                            color='white'
                            size={20}
                            className="cursor-pointer"
                            onClick={() => setSearch(true)}
                            aria-label="Open search"
                        />
                    </li>

                    {links.map((item, index) => (
                        <li
                            key={index}
                            className="md:ml-8 md:my-0 my-7 font-semibold"
                            onClick={closeMenu} // Close mobile menu when a link is clicked
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
                                    onClick={closeMenu} // Close menu when link is clicked
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
