import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from './components/Header';
import Counter from "./components/Counter";
import Slider from "./components/Slider";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: 'MyReact',
      user: { name: 'Oleg', image: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' }
    };
  }

  render() {
    return (
      <div>
        <Header logoText={this.state.brand} user={this.state.user} />
        <main>
          <Counter />
          <Slider />
          <Home />
          <About />
        </main>
      </div>
    );
  }
}

export default App;
