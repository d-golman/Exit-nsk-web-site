import React from 'react'
import Main from '../core/main/main';
import { Route, BrowserRouter as Router, Switch, useLocation, Link } from 'react-router-dom'
import QuestPage from '../core/questPage/questPage';
import Base from '../core/base/base';
import CelebPage from '../core/celebPage/celebPage';

function App() {

  const utm_source = window.localStorage.getItem('utm_source') ? (new URL(document.location)).searchParams.get('utm_source') : 'site'
  window.localStorage.setItem('utm_source', utm_source)

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/quests/:id' component={QuestPage} />
        <Route exact path='/celebs/:id' component={CelebPage} />
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