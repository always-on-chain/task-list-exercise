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
      if (task.completedAt) {
        tasksCompleted++;
      }
    })
    this.setState({
      tasksCompleted: tasksCompleted
    })
  }

  componentWillMount() {
    this.countTasksCompleted();
  }

  render() {
    return (
      <div id="task-group">
        <img src="images/Group.svg" id="task-group-icon" onClick={() => {console.log('hi')}}/> 
        <div id="task-group-content">
          <div id="task-group-name">{this.state.groupName}</div>
          <div id="task-group-completed">{this.state.tasksCompleted} OF {this.state.groupTasks.length} TASKS COMPLETE</div>
        </div>
      </div>
    )
  }
}

export default TaskGroup;