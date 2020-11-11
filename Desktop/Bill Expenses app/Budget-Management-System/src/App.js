import {React,Component} from "react"
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard.js';

import './App.css';

export default class App extends Component {
  render(){
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
}
};
