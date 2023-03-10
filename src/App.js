import react, { useState, useEffect } from 'react';
import { AppWrapper,
         CardWrapper,
         TopWrapper,
         EyeDiv } from './AppStyled';
import Card from './components/Cards/Card';
import Eye from './images/Eye-of-Sauron.jpg';

function App() {

  const [enemies, setEnemies] = useState([])

  useEffect(() => {
    setEnemies([{name: 'Teste1', health: 2}, {name: 'teste2', health: 8}, {name: 'teste3', health: 4}])
  }, [])
  
  const generateCards = () => {
    console.log(enemies)
    const cards = [];
    if (enemies.length == 0) {
      return <Card />
    } else {
      enemies.map((enemy) => {
        cards.push(<Card name={enemy.name} health={enemy.health} />)
      })
      return cards;
    }
  }

  return (
    <AppWrapper>
      <TopWrapper>
        <EyeDiv url={Eye}/>
      </TopWrapper>
      <CardWrapper>
        {generateCards()}
      </CardWrapper>
    </AppWrapper>
  );
}

export default App;
