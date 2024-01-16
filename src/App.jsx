import './App.css'
import Chip from "./components/atoms/Chip.jsx";
import ChipList from "./components/molecules/ChipList.jsx";
import Button from "./components/atoms/Button.jsx";
import {AiOutlineExport} from "react-icons/ai";
import Layout from "./components/organismes/Layout.jsx";

function App() {

  const categories = [
      {name: 'Movie'},
      {name: 'Series'},
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
