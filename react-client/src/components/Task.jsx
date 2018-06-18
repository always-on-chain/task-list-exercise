import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: props.currentTask
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.currentTask = nextProps.currentTask
    this.setState({
      currentTask: nextProps.currentTask
    })
  }

  render() {
    return (
      <div id={this.state.currentTask}>
        {console.log('inside redner', this.state.currentTask.task)}
        {this.state.currentTask.task}
      </div>
    )
  }
}

export default Task;