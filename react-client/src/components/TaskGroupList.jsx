import React from 'react';

class TaskGroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskGroups: props.taskGroups,
    }
  }

  render() {
    return (
      this.state.taskGroups.map((taskGroup) => {
        return <p>{taskGroup}</p>;
      })
    )
  }
}

export default TaskGroupList;