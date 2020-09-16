import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TaskList from '../components/TaskList';
import {getTasks} from '../store/actions/action';

export const TaskListContainer = props => {
  useEffect(() => {
    props.getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TaskList tasks={props.tasks} />
    </>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  getTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
