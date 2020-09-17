import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import {updateTask} from '../store/actions/action';

export function TaskFormEdit(props) {
  const [task, setTask] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      title: props.task.title,
      description: props.task.description,
    }
  );

  const handleSubmit = e => {
    props.updateTask(props.task._id, task);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className='card'
          style={{borderRadius: '0', borderColor: '#EB6864'}}
        >
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
                value='Update'
                style={{
                  borderRadius: '0',
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormEdit);
