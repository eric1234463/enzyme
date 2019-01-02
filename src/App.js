import React, { Component } from 'react';
import Card from './Card';

const rows = [
  {
    name: '123',
  },
  {
    name: '123',
  },
];
class App extends Component {
  render() {
    return <div>
      <Card rows={rows} />
    </div>;
  }
}

export default App;
