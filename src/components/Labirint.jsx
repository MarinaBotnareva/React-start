import React from 'react';

const randomEvents = ['камень', 'дорожный знак', 'сундук', 'цветы', 'горы', 'путника', 'собаку'];

class Labirint extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      counter: 1,
      laststep: null,
      random: 0 };
  }

  step = (event) => {
    this.setState((state) => {
    return {
      ...state,
      counter: state.counter + 1,
      laststep: event.target.id,
      random: Math.floor(Math.random() * randomEvents.length),
    };
  });
  console.log(this.state.counter)
    }

  render() {

    return (
      <div>
        <div>
        На прошлом шаге вы выбрали пойти {this.state.laststep}
        </div>
        <div>
          Перед собой вы видите {randomEvents[this.state.random]}
        </div>
        <div>
          <button id="налево" onClick={this.step}>Пойти налево</button>
          <button id="прямо" onClick={this.step}>Пойти прямо</button>
          <button id="направо" onClick={this.step}>Пойти направо</button>
        </div>
      </div>
    )
  }

}

export default Labirint;