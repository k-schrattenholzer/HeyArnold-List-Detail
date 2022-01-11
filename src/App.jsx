import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from './views/Character/CharacterList.jsx';
import CharacterDetail from './views/Character/CharacterDetail.jsx';
import Home from './views/Home/Home.jsx';

export default function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/character-detail/:id">
            <CharacterDetail />
          </Route>
          <Route exact path="/character-list">
            <CharacterList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
