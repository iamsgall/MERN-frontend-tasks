import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import {addTask} from '../store/actions/action';

export const TaskForm = props => {
  const [task, setTask] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      title: '',
      description: '',
    }
  );

  const handleSubmit = e => {
    props.addTask(task);
    setTask({
      title: '',
      description: '',
    });
    e.preventDefault();
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({[name]: value});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='card' style={{borderRadius: '0', borderColor: '#EB6864'}}>
        <div
          className='card-header bg-primary text-white'
          style={{borderRadius: '0'}}
        >
          <h4 className='text-center'>Task Form</h4>
        </div>
        <div className='card-body' style={{borderRadius: '0'}}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Task title'
              name='title'
              value={task.title}
              onChange={handleChange}
              style={{borderRadius: '0', borderColor: '#EB6864'}}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Task description'
              name='description'
              value={task.description}
              onChange={handleChange}
              style={{
                borderRadius: '0',
                borderColor: '#EB6864',
                resize: 'none',
              }}
            />
          </div>
          <div className='form-group'>
            <input
              className='btn btn-primary'
              type='submit'
              value='Add'
              style={{
                borderRadius: '0',
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
