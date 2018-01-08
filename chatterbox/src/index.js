import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
<<<<<<< HEAD
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
=======
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
>>>>>>> a618535d14a937d44acd9be79803e4b08a399c8d
registerServiceWorker();
