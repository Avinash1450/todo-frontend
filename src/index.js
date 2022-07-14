import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './Components/Todocontainer/Todocontainer'
import Message from './Components/Message/Message'
import './index.scss'
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <div className='index'>
  <React.StrictMode>
    <Message/>
    <TodoContainer className="Todocontainer" />
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);



