import { Component } from "react";

//belajar state

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waktu: props.start,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.increase(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  increase() {
    this.setState((state, props) => ({
      waktu: parseInt(state.waktu) + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.waktu} detik</h1>
        {/* <h1>jsksjfhks</h1> */}
      </div>
    );
  }
}

class Tulis extends Component {
  render() {
    return <h1>test</h1>;
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Tulis /> */}
          <Timer start="0" />
          <Timer start="10" />
        </header>
      </div>
    );
  }
}

export default App;
