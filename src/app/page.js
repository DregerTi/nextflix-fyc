import Button from "@/components/atoms/Button";
import Layout from "@/components/organismes/Layout";
import MovieCardList from "@/components/molecules/MovieCardList";
import {AiOutlineExport} from "react-icons/ai";
import RandomMovie from "@/components/molecules/RandomMovie";

export default async function Home() {

  const trendingMovies = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=1`).then((response) => response.json());
  const popularMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=1`).then((response) => response.json());

  const mostPopularMovie = popularMovies.results[0];

  popularMovies.results.shift();

  return (
    <Layout>

      <div className={'relative w-full h-[65dvh] rounded overflow-hidden shadow-lg flex mb-2 pb-4 max-sm:p-0 max-sm:flex-col'}>
        <img
          className={'shadow-inner-right rounded-lg h-full w-full max-sm:h-full object-cover grayscale-[10%]'}
          src={`https://image.tmdb.org/t/p/original/${mostPopularMovie.backdrop_path}`}
          alt={mostPopularMovie.title}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3" />
        <div className={'absolute w-full bottom-0 left-0 max-sm:px-6 max-sm:py-4 py-20 px-10 flex-grow flex flex-col justify-between'}>
          <h1 className="text-6xl font-bold mb-2 max-sm:hidden">Cette semaine ne ratez pas!</h1>
          <div className={'max-sm:flex-col'}>
            <div className={'font-bold text-2xl mb-2'}>
              { mostPopularMovie.title }
            </div>
            <div className={'mt-8'}>
              <Button
                title={'voir plus'}
                href={`/movie/${mostPopularMovie.id}`}
                className={'max-sm:!w-full !bg-blue-400 hover:!bg-blue-500'}
                icon={<AiOutlineExport/>}/>
            </div>
          </div>
        </div>
      </div>

      <section className={'w-full mt-2'}>
        <h2 className={'text-2xl font-medium mt-4 ml-8'}>Films à la une</h2>
        <MovieCardList movies={popularMovies.results} />
      </section>

      <section className={'w-full mt-2'}>
        <h2 className={'text-2xl font-medium mt-4 ml-8'}>Films en tendance</h2>
        <MovieCardList movies={trendingMovies.results} />
      </section>

      <RandomMovie/>
    </Layout>
  );
}
