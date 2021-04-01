import React from 'react';
import { IntegrationCard } from '../integration-card/integration-card';
import './integration-cards.scss';
import { gql, useQuery } from '@apollo/client';
import { LinearProgress } from '@material-ui/core';

interface Integration {
  id: string;
  name: string;
  description: string;
}

const INTEGRATIONS_QUERY = gql`
  query RetrieveIntegrations {
    integrations {
      description
      id
      name
    }
  }
`;

export function IntegrationCards() {
  const { loading, error, data } = useQuery(INTEGRATIONS_QUERY);

  if (data) {
    return (
      <div className="integrations">
        {data.integrations.map((integration: Integration) => (
          <IntegrationCard key={integration.id} name={integration.name} description={integration.description} />
        ))}
      </div>
    );
  } else {
    return <LinearProgress className="page-progress" color="primary" />;
  }
}
