import React from 'react';
import ReactDOM from 'react-dom';
import items from '../../items.json';
import TaskGroupList from './components/TaskGroupList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskGroups: []
    }
  }

  getTaskGroups() {
    let set = new Set();
    let groups = [];

    for (let i = 0; i < items.length; i++) {
      set.add(items[i]['group']);
    }

    set.forEach((group) => {
      groups.push(group);
    })

    this.setState({
      taskGroups: groups
    })
  }

  componentWillMount() {
    this.getTaskGroups();
  }

  render() {
    let taskGroupSize = this.state.taskGroups.length;

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