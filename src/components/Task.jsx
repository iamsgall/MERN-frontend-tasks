import React from 'react';
import {connect} from 'react-redux';
import {deleteTask} from '../store/actions/action';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getTask} from '../store/actions/action';

export const Task = props => {
  const handleDelete = () => {
    props.deleteTask(props.task._id);
  };

  const handleEdit = () => {
    props.getTask(props.task._id);
  };

  return (
    <tr>
      <th scope='row'>{props.count}</th>
      <td>{props.task.title}</td>
      <td>{props.task.description}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => handleDelete()}
          style={{borderRadius: '0'}}
        >
          <FontAwesomeIcon icon='trash' />
        </button>
        <button
          className='btn btn-info ml-2'
          style={{borderRadius: '0'}}
          onClick={() => handleEdit()}
        >
          <FontAwesomeIcon icon='edit' />
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = state => ({
  hasEditing: state.hasEditing,
});

const mapDispatchToProps = {
  deleteTask,
  getTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
