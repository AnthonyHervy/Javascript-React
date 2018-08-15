import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import { sortBy } from 'lodash';
import ParticipantList from './components/Participants';
import data from './data';


export default () => {
    return (
      <BrowserRouter>
        <Switch>
          <Layout exact path="/" component={Home} />
          <Layout
          exact
          path="/participants/by/:sort"
          component={({ match }) => (
            <ParticipantList data={sortBy(data, match.params.sort)} />
          )}
        />
          <Layout
          exact
          path="/participants"
          component={() => <ParticipantList data={data} />}
        />
                <Layout
          exact
          path="/classement"
          component={() => (
            <ParticipantList
              data={sortBy(data, (p) => p.nbreWins * 3 + p.nbreLoses).reverse()}
            />
          )}
        />
      
          </Switch>
    </BrowserRouter>
  );
};
