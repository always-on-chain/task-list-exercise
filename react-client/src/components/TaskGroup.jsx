import React from 'react';

class TaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupTasks: props.group,
      groupName: props.group[0].group,
      tasksCompleted: 0
    }
  }

  countTasksCompleted() {
    let tasksCompleted = 0;

    this.state.groupTasks.forEach((task) => {
      console.log('task' ,task)
      if (task.completedAt) {
        tasksCompleted++;
      }
    })

    // console.log(tasksCompleted)

    this.setState({
      tasksCompleted: tasksCompleted
    })
  }

  componentWillMount() {
    this.countTasksCompleted();
  }

  render() {
    return (
      <div>
      <div>{this.state.groupName}</div>
      <div>{this.state.tasksCompleted} OF {this.state.groupTasks.length} TASKS COMPLETE</div>
      </div>
    )
  }
}

export default TaskGroup;