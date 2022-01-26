import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Crypto from './components/Crypto';

//redux part
import { Provider } from 'react-redux';
import store from './store';
import Test from './components/Test';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/cryptos' component={Crypto} />
          <Route exact path='/test' component={Test} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
