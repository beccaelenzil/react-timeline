import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    console.log(timelineData);
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Becca's Timeline</h1>
        </header>
        <main className="App-main">
        </main>
        <TimelineEvent person="Becca" status="Birthday!" timestamp="May 25, 1984"/>
      </div>
    );
  }
}

export default App;
