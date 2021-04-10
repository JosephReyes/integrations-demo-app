import React from 'react';
import './export-api-page.scss';
import {VideoPlayer} from '../video-player/video-player';
import {Header} from '../page-header/header';
import {Card, LinearProgress, Typography} from '@material-ui/core';
import {Overview} from '../overview/overview';
import {ApiKey} from '../api-key/api-key';
import {Documentation} from '../documentation/documentation';
import {gql, useQuery} from '@apollo/client';
import { useParams } from "react-router-dom";

const getQuery = (id: string) => gql`
  query ApiInfoQuery {
    integration(id: "${id}") {
      description
      id
      name
      documentation
    }
  }
`;

export function IntegrationPage() {
  let { id } = useParams<Record<string, string>>();
  const { data } = useQuery(getQuery(id));

  let integration;
  if (data){
    integration = data.integration;
  }

  return (
    <div>
      {data ? (
        <div className="page">
          <Typography variant="h1">{integration.name}</Typography>
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
