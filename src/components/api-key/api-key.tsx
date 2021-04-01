import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import './api-key.scss';
import { gql, useQuery } from '@apollo/client';
import { KeyBox } from '../key-box/key-box';

const bullet = String.fromCharCode(8226);

export function ApiKey() {
  return (
    <div>
      <Typography variant="h4">Your API key</Typography>
      <Typography variant="body1">{bullet} This is necessary for etc. etc. </Typography>
      <Typography variant="body2">API key: </Typography>
      <KeyBox />
    </div>
  );
}
