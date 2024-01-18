import {useEffect, useState} from "react";

const Header = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className={`w-full fixed top-0 z-50 transition-all duration-300 shadow-inner ${scrollHeight > 50 ? 'h-16' : 'h-20'}`}>
            <div className="flex items-center p-0 h-full">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent h-20" />

                <div className="absolute w-full">
                    <div className="mx-auto flex justify-between items-center px-4 lg:px-8 h-full">
                        <a href="/">
                            <img
                                src="/logo.svg"
                                alt="Nextflix Logo"
                                width={'110'}
                                height={'40'}
                            />
                        </a>
                        <div>
                            <a
                                href="https://github.com/tonrepo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;