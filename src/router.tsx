import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import React from 'react';
import { ExportApiPage } from './components/export-api/export-api-page';
import { LibraryPage } from './components/library/library-page';

export function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/export-api">
          <ExportApiPage />
        </Route>

        <Route exact path="/library">
          <LibraryPage />
        </Route>

        <Redirect from="/" to="/export-api" />
      </Switch>
    </div>
  );
}
