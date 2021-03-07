import React from 'react'
import Main from '../core/main/main';
import {Route, BrowserRouter as Router, Switch, useLocation, Link} from 'react-router-dom'
import QuestPage from '../core/questPage/questPage';
import Base from '../core/base/base';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route exact path='/quests/:id' component={QuestPage}/>
      <Route path='*' component={NoMatch}></Route>
    </Switch>
    </Router>
  );
}

export default App;


function NoMatch() {
  let location = useLocation();

  return (
    <Base>
    <div className="error">
      <h1>Ошибка 404</h1>
      <h3>
        Путь <code>{location.pathname}</code> не найден
      </h3>
      <Link to={'/'}>Вернуться на главную</Link>
      </div>
    </Base>
  );
}