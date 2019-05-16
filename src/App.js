import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Index from './view/home'
class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/home" component={ Index }></Route>
        </Switch>
      </div>
    )
  }
}
export default App;