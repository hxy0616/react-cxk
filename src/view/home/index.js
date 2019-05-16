import React from 'react';
import { Route, Switch} from 'react-router-dom';
import My from './my'
import Student from './student'
class Index extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home/my" component={ My }></Route>
          <Route path="/home/student" component={ Student }></Route>
        </Switch>
      </div>
    )
  }
}

export default Index;