import React, { Component } from 'react';
import { TitledList, TitledContentBox } from './components/TitledComponents'
import Update from './components/Update'
class App extends Component {
  render() {
    const names = [
      'jake',
      'sarah',
      'alex',
      'josh', 
      'drake'
    ]
    return (
      <div>
        <TitledList title='friends' values={names}/>
        <TitledContentBox title='Article' content='Hello, World'/>
        <Update text='Click Me' update='onClick' />
      </div>
    );
  }
}

export default App;
