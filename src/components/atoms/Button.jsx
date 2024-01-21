import Link from "next/link";

const Button = ({title, icon, type, handleClick, hasBackground, href, className}) => {
  const buttonStyle = hasBackground
    ? 'bg-white hover:bg-gray-400 text-black'
    : 'bg-transparent text-white';

  return href ? (
    <Link
      href={href}
      className={`py-2 px-4 rounded-lg w-min flex items-center transition-all cursor-pointer justify-center ${className ?? ''} ${buttonStyle}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="whitespace-nowrap">{title}</span>
    </Link>
  ) : (
    <button
      className={`py-2 px-4 rounded-lg w-min flex items-center transition-all cursor-pointer justify-center ${className ?? ''} ${buttonStyle}`}
      type={type ?? 'button'}
      onClick={handleClick ?? null}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="whitespace-nowrap">{title}</span>
    </button>
  );
}

export default Button;