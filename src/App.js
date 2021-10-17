import React from 'react' 
import ChooseItems from './components/ChooseItems';
import ForBusiness from './components/ForBusiness';
import GamePass from './components/GamePass';
import Header from './components/Header';
import Hero from './components/Hero';
import ItemsWithImage from './components/ItemsWithImage';
import MSresponse from './components/MSresponse';

function App() {
  return (
    <>
    <Header />
    <Hero/>
    <ChooseItems />
    <ItemsWithImage />
    <GamePass />
    <ForBusiness />
    <MSresponse />
    </>
  );
}

export default App;
