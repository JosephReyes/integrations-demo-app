import React from 'react';
import { IntegrationCards } from '../integration-cards/integration-cards';
import { Typography } from "@material-ui/core";

export function LibraryPage() {
  return (
    <div>
      <div className="page">
        <Typography className="title" variant="h1">Integrations</Typography>
        <IntegrationCards />
      </div>
    </div>
  );
}
