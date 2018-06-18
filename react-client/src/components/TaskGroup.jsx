import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton'; 
import MenuItem from 'react-bootstrap/lib/MenuItem'; 
import Task from './Task.jsx';

class TaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupTasks: props.group,
      groupName: props.group[0].group,
      tasksCompleted: 0,
      seeTasks: false,
      currentTask: '',
      showTask: false
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

  showTasks() {
    this.setState({seeTasks: !this.state.seeTasks, 
      showTask: false
    })
  }

  tasksDropDown() {
    return (
      <DropdownButton title='TASKS'>
        {this.state.groupTasks.map((task) => {
          return <MenuItem id={task.id} onClick={(event)=> {this.getTask(event)}}>{task.task}</MenuItem>
        })}
      </DropdownButton>
    )
  }

  getTask(event) {
    for (let i = 0; i < this.state.groupTasks.length; i++) {
      let task = this.state.groupTasks[i]
      if (Number(event.target.id) === task.id) {
        this.setState({
          currentTask: task, 
          showTask: true
        })
      }
    }
  }

  render() {
    return (
      <div id="task-group">
        <img src="images/Group.svg" id="task-group-icon" onClick={() => {this.showTasks()}}/> 
        <div id="task-group-content">
          <div id="task-group-name">{this.state.groupName}</div>
          <div id="task-group-completed">{this.state.tasksCompleted} OF {this.state.groupTasks.length} TASKS COMPLETE</div>
          {this.state.seeTasks ? this.tasksDropDown() : ''}
          <div id="task"></div>
          {this.state.showTask ? <Task currentTask={this.state.currentTask} /> : ''}
        </div>
      </div>
    )
  }
}

export default TaskGroup;