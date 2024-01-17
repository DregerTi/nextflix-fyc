const MovieCard = ({ posterUrl, title, id, backdrop_path }) => {
    return (
        <>
            <div className="cursor-pointer w-60 min-w-60 max-sm:w-40 max-sm:min-w-40 rounded overflow-hidden shadow-sm relative mx-3 hover:shadow-lg hover:ring-1 hover:shadow-blue-300 transition-all duration-700">
                <img
                    className="w-full hover:grayscale-[25%] grayscale-0 transition-all duration-700"
                    src={`https://image.tmdb.org/t/p/original/${posterUrl}`}
                    alt={title}
                    width={500}
                    height={50}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
                <div className="absolute bottom-0 left-0 p-4 text-white">{title}</div>
            </div>
        </>
    );
};

export default MovieCard;