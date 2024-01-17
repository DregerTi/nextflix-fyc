import './App.css';
import ChipList from "./components/molecules/ChipList.jsx";
import Button from "./components/atoms/Button.jsx";
import {AiOutlineExport} from "react-icons/ai";
import Layout from "./components/organismes/Layout.jsx";

function App() {

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
      <Button title={'click me'} icon={<AiOutlineExport/>} type={'submit'} handleClick={()=>{alert('coucou')}}/>
      <Button title={'google'} hasBackground href={'https://www.google.com'}/>
      <ChipList chips={categories}/>
    </Layout>
  )
}

export default App
