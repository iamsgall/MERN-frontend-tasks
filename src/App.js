import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import Navigation from './components/Navigation';
import TaskListContainer from './containers/TaskListContainer';
import './utils/fontawesome';
import TaskFormContainer from './containers/TaskFormContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navigation />
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-3'>
              {/* <TaskForm /> */}
              <TaskFormContainer />
            </div>
            <div className='col-md-9'>
              <TaskListContainer />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
