import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import React from 'react';
import { IntegrationPage } from './components/integration-page/integration-page';
import { LibraryPage } from './components/library/library-page';

export function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/integration/:id" children={<IntegrationPage />} />

        <Route exact path="/library" children={<LibraryPage />} />

        <Redirect from="/" to="/library" />
      </Switch>
    </div>
  );
}
