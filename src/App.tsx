import React from "react";
import { randomWordsData } from "./data";
import "./App.css";
interface AppProps {}

interface AppState {
  time: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      time: 60,
    };
  }
  timerInterval?: NodeJS.Timer;
  countDownHandler = () => {
    this.timerInterval = setInterval(() => {
      if (this.state.time < 1) {
        clearInterval(this.timerInterval);
      } else {
        this.setState({ time: this.state.time - 1 });
      }
    }, 1000);
  };

  render() {
    return (
      <>
        <button className="button" onClick={() => this.countDownHandler()}>
          start
        </button>
        <div className="time">
          <h1>time</h1>
          <p>{this.state.time}</p>
        </div>
      </>
    );
  }
}

export default App;
