import React from 'react';

class TaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: props.group,
      tasksCompleted: 0
    }
  }

  render() {
    return (
      this.state.group.map((task) => {
        return <p>{task.task} {task.group}</p>
      })
    )
  }
}

export default TaskGroup;