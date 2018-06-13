import React from 'react';
import TaskGroup from './TaskGroup.jsx'

class TaskGroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskGroups: props.taskGroups,
    }
  }

  render() {
    let taskGroups = Object.keys(this.state.taskGroups);

    return (
      taskGroups.map((taskGroup) => {
        let group = this.state.taskGroups[taskGroup];
        return <TaskGroup group={group} />
      })
    )
  }
}

export default TaskGroupList;