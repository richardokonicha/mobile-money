import React from 'react';
import RootContainer from './RootContainer';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return(
    <Provider store={ store }>
      <RootContainer />
    </Provider>
  );
};

export default App;