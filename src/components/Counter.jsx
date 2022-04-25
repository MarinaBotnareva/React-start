import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counter: 0, test: 123 };
  }

  // используем стрелки для слушателей событий
  increment = () => {
    // изменение состояния приводит к перерисовке
    // state всегда обьект - поэтому создаем новый обьект
    this.setState((state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    });
  }

  decrement = () => {
    this.setState((state) => {
      return {
        ...state,
        counter: state.counter - 1,
      };
    });
  }

  reset = () => {
    this.setState((state) => ({...state, counter: 0}));
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-1</button>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }


}

export default Counter;
