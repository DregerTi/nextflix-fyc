import Chip from "@/components/atoms/Chip";
import ChipList from "@/components/molecules/ChipList";
import Button from "@/components/atoms/Button";
import Layout from "@/components/organismes/Layout";
import MovieCard from "@/components/molecules/MovieCard";
import MovieCardList from "@/components/molecules/MovieCardList";
import {AiOutlineExport} from "react-icons/ai";

export default function Home() {
  const categories = [
    {name: 'Movie'},
    {name: 'Series'},
  ];

  const movies = [
    {
      title: 'Reservoir Dogs',
      poster_path: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/jqFjgNnxpXIXWuPsyfqmcLXRo9p.jpg'
    },
    {
      title: 'Supergirl',
      poster_path: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/vqBsgL9nd2v04ZvCqPzwtckDdFD.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/jgb9xICHFX8wTGQ75js4uNbttQs.jpg'
    },
    {
      title: 'The Super Mario Bros. Movie',
      poster_path: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg'
    },
    {
      title: 'Oppenheimer',
      poster_path: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'
    },
    {
      title: 'Barbie',
      poster_path: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/nHf61UzkfFno5X1ofIhugCPus2R.jpg'
    },
    {
      title: 'Pulp Fiction',
      poster_path: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg'
    },
    {
      title: 'Chicken Run: Dawn of the Nugget',
      poster_path: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg'
    },
    {
      title: 'Wonka',
      poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/qhb1qOilapbapxWQn9jtRCMwXJF.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg'
    },
    {

      title: 'Leo',
      poster_path: 'https://media.themoviedb.org/t/p/w220_and_h330_face/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg',
      backdrop_path: 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/auXrHU6O17n9Tz11SHReoorjrU6.jpg'
    },
  ];

  return (
    <Layout>

      <div className={'relative w-full h-[65dvh] rounded overflow-hidden shadow-lg flex mb-2 pb-4 max-sm:p-0 max-sm:flex-col'}>
        <img
          className={'shadow-inner-right rounded-lg h-full w-full max-sm:h-full object-cover grayscale-[10%]'}
          src={'https://media.themoviedb.org/t/p/w533_and_h300_bestv2/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg'}
          alt={'Wonka backdrop'}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3" />
        <div className={'absolute w-full bottom-0 left-0 max-sm:px-6 max-sm:py-4 py-20 px-10 flex-grow flex flex-col justify-between'}>
          <h1 className="text-6xl font-bold mb-2 max-sm:hidden">Cette semaine ne ratez pas!</h1>
          <div className={'max-sm:flex-col'}>
            <div className={'font-bold text-2xl mb-2'}>
              Wonka
            </div>
            <div className={'mt-8'}>
              <Button
                title={'voir plus'}
                className={'max-sm:!w-full !bg-blue-400 hover:!bg-blue-500'}
                icon={<AiOutlineExport/>}/>
            </div>
          </div>
        </div>
      </div>

      <section className={'w-full mt-2'}>
        <h2 className={'text-2xl font-medium mt-4 ml-8'}>Films à la une</h2>
        <MovieCardList movies={movies} />
      </section>

      <section className={'w-full mt-2'}>
        <h2 className={'text-2xl font-medium mt-4 ml-8'}>Séries du moment</h2>
        <MovieCardList movies={movies} />
      </section>
    </Layout>
  );
}
