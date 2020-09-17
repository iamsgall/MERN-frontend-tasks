import React from 'react';
import {connect} from 'react-redux';
import TaskFormAdd from '../components/TaskFormAdd';
import TaskFormEdit from '../components/TaskFormEdit';
import {addTask} from '../store/actions/action';

export const TaskFormContainer = props => {
  return (
    <>
      {!props.hasEditing ? (
        <TaskFormAdd addTask={addTask} />
      ) : (
        <TaskFormEdit task={props.task} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  hasEditing: state.hasEditing,
  task: state.task,
});

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);
