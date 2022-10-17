//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './component/Home';
import ToDo from './component/ToDo/ToDo';
import TodoProvider from './component/context/TodoProvider'
import { Provider } from 'react-redux';
import {store} from './component/redux/store'
import {persistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"
 let persistor=persistStore(store)
//database
//const { todos, todoDispatch } = useContext(TodoContext);



function App() {
 // const [state ,setstate]=useState(todos);






  return (

    <div className='container'>
      <Provider store={store}>
        <persistGate persistor={persistor}>
           <Home/>
        </persistGate>
  
      </Provider>
   
    </div>
  );
}

export default App;
