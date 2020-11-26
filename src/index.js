import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';

// STORE -> GLOBALIZED STATE

// ACTION returns action type object
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// REDUCERS takes args state and actions returns object
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       state ++;
//     case 'DECREMENT':
//       state --;
//     }
//   }
 // store.subscribe(()=>{console.log(store.getState(), 'kjlfdslk')});

  // store.dispatch(increment());
  // DISPATCH


  
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
 
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
