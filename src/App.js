import React from 'react' 
import ChooseItems from './components/ChooseItems';
import Header from './components/Header';
import Hero from './components/Hero';
import ItemsWithImage from './components/ItemsWithImage';

function App() {
  return (
    <>
    <Header />
    <Hero/>
    <ChooseItems />
    <ItemsWithImage />
    </>
  );
}

export default App;
