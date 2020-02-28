import React from 'react';
import './App.css';
import ControlBar from './components/ControlBar'
import { Provider } from 'react-redux';
import store from './reducer/reducer'
import TextItem from './components/TextItem';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ControlBar/>
      <TextItem/>
    </div>
    </Provider>
  );
}

export default App;
