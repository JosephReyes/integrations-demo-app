import React from 'react';
import './export-api-page.scss';
import {VideoPlayer} from '../video-player/video-player';
import {Header} from '../page-header/header';
import {Card, LinearProgress, Typography} from '@material-ui/core';
import {Overview} from '../overview/overview';
import {ApiKey} from '../api-key/api-key';
import {Documentation} from '../documentation/documentation';
import {gql, useQuery} from '@apollo/client';

const API_INFO_QUERY = gql`
  query ApiInfoQuery {
    integrations(id: "1") {
      description
      id
      name
      documentation
    }
  }
`;

export function ExportApiPage() {
  const { loading, data } = useQuery(API_INFO_QUERY);

  let integration;
  if (data){
    integration = data.integrations[0];
  }

  return (
    <div>
      {data ? (
        <div className="page">
          <Typography variant="h1">Export API</Typography>
          <Card className="info" variant="outlined">
            <Overview description={integration.description}/>
            <VideoPlayer />
            <ApiKey />
            <Documentation link={integration.documentation}/>
          </Card>
        </div>
      ) : (
        <LinearProgress className="page-progress" color="primary" />
      )}
    </div>
  );
}
