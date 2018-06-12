import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskGroups: []
    }
  }

  render() {
    return (
      <h1>Things To Do</h1>
    ) 
  }
}

ReactDOM.render(<App />, document.getElementById('app'));