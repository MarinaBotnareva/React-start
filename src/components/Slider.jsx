import React from "react";

const imgs = [
      'https://wowslider.com/sliders/demo-5/data/images/sweden.jpg',
      'http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
      'https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg',
      'http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
      'http://wowslider.com/sliders/demo-18/data1/images/new_york.jpg',
      'https://geoportal.kreis-herford.de/kategorie/Umgebung/img/landscape/01.jpg',
    
    ];


class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        id: 0};
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.next(),
      1000
    );
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.startTimer() 
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  next = () => {
    this.setState((state) => {
      return {
        ...state,
        id: state.id >= imgs.length-1 ? 0 : state.id+ 1,
      };
    });
      };

  prev = () => {
    this.setState((state) => {
    return {
      ...state,
      id: state.id > 0 ? state.id-1 : imgs.length - 1,
    };
  });
    }

    timer = () => {
      if (this.timerID) {
        this.stopTimer();
      this.timerID = null;
      }
    else {
      this.startTimer();
    }
  } 

  render() {
    return (
      <div>
        <div>
        <button onClick={this.prev}>-</button>
        <img src= {imgs[this.state.id]} width = "400px" height= "250px" alt = ""/> 
        <button onClick={this.next}>+</button>
        </div>
        <button onClick={this.timer}>start/stop</button>
      </div>
    );
  }


}

export default Slider;
