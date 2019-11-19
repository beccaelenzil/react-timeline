import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import events from './data/timeline.json'

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
        <Timeline events={events.events}/>
      </div>
    );
  }
}

export default App;
