import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Index.module'; './components/Home/Index.module';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
