
import './App.css';
import sweater from './imgs/pic.png';

function App() {
  const cards = [{
    title: '  ',
    img: sweater
  }, {
    title: '  ',
    img: sweater
  }]


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi Jesse pls don't be mad at me thank u
        </p>

        <div className="Container">
          {cards.map(card =>
            <div className="Card">
              <img src={card.img} alt="Pic" style={{
                maxWidth: '250px',
                height: 'auto',
                display: 'block',
                // marginLeft: 'auto',
                // marginRight: 'auto'
              }} />
              {/* <div className="Title">
                {card.title}
              </div> */}
            </div>)}
        </div>

      </header>
      <header className="App-subheader">
        <p>
          do u like my pink website?
      </p>
        <p>
          I'm still upset u gave me an F
      </p>
      </header>
    </div>
  );
}

export default App;
