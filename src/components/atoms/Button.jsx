const Button = ({title, icon, type, handleClick, hasBackground, href}) => {
    const buttonStyle = hasBackground
        ? 'bg-neutral-700 hover:bg-gray-400 text-white'
        : 'bg-transparent text-black';

    return href ? (
        <a
            href={href}
            className={`py-2 px-4 rounded-lg w-min flex items-center transition-all cursor-pointer justify-center ${buttonStyle}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            <span className="whitespace-nowrap">{title}</span>
        </a>
    ) : (
        <button
            className={`py-2 px-4 rounded-lg w-min flex items-center transition-all cursor-pointer justify-center ${buttonStyle}`}
            type={type ?? 'button'}
            onClick={handleClick ?? null}
        >
            {icon && <span className="mr-2">{icon}</span>}
            <span className="whitespace-nowrap">{title}</span>
        </button>
    );
}

export default Button;