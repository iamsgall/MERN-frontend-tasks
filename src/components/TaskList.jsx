import React from 'react';
import Task from './Task';

export default function TaskList(props) {
  let count = 1;
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Title</th>
          <th scope='col'>Description</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        <>
          {props.tasks.map(task => (
            <Task key={task.id} count={count++} task={task} />
          ))}
        </>
      </tbody>
    </table>
  );
}
