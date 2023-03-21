import react, { useState, useEffect } from 'react';
import { AppWrapper,
         CardWrapper,
         TopWrapper,
         EyeDiv } from './AppStyled';
import Card from './components/Cards/Card';
import Eye from './images/Eye-of-Sauron.jpg';

function App() {

  const [enemies, setEnemies] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //setEnemies([{name: 'Bandido', health: 2, armor: 3, magic: 0, damage: 4}, {name: 'Bandido', health: 8, armor: 1, magic: 2, damage: 0}, {name: 'Orc', health: 15, armor: 3, magic: 3, damage: 1}])
  }, [])
  
  const generateCards = () => {
    const cards = [];
    if (enemies.length == 0) {
      return <Card new={true} onClick={()=> generateEnemies()}/>
    } else {
      enemies.map((enemy) => {
        cards.push(<Card name={enemy.name} health={enemy.health} armor={enemy.armor} magic={enemy.magic} damage={enemy.damage} />)
      })
      cards.push(<Card new={true} />)
      return cards;
    }
  }

  const generateEnemies = () => {
    setShowModal(true);
    alert('INIMIGOS!')
    console.log('INIMIGOS!')
  }

  return (
    <AppWrapper>
      <TopWrapper>
        <EyeDiv url={Eye}/>
      </TopWrapper>
      <CardWrapper>
        {generateCards()}
      </CardWrapper>
      {showModal ? 
        <>
          Aberto
        </>
      :
        <>
          Fechado
        </>
      }
    </AppWrapper>
  );
}

export default App;
