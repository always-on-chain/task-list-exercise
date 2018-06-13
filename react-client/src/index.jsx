import React from 'react';
import ReactDOM from 'react-dom';
import items from '../../items.json';
import TaskGroupList from './components/TaskGroupList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskGroups: {}
    }
  }

  getTaskGroups() {
    let groups = {};

    for (let i = 0; i < items.length; i++) {
      if (!groups[items[i]['group']]) {
        groups[items[i]['group']] = [];
      } else {
        groups[items[i]['group']].push(items[i]);
      }
    }
    this.setState({
      taskGroups: groups
    })
  }

  componentWillMount() {
    this.getTaskGroups();
  }

  render() {
    // console.log(this.state.taskGroups)
    let taskGroupSize = Object.keys(this.state.taskGroups).length
    
    if (taskGroupSize > 0) {
      return (
        <div>
          <h1>Things To Do</h1>
          <TaskGroupList taskGroups={this.state.taskGroups} />
        </div>
      ) 
    } else {
      return <h1>Things To Do</h1>
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));