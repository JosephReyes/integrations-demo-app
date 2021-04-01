import { IconButton, LinearProgress, Typography } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import './key-box.scss';

const bullet = String.fromCharCode(8226);

const API_KEY_QUERY = gql`
  query RetrieveCredentials {
    credentials {
      apiKey
    }
  }
`;

export function KeyBox() {
  const [showKey, setShowKey] = useState(false);
  const revealKey = () => setShowKey(true);

  return (
    <div className="key-box">
      {showKey ? <ExposedKey /> : <span>{bullet.repeat(41)}</span>}
      <IconButton onClick={revealKey}>
        <Visibility />
      </IconButton>
    </div>
  );
}

function ExposedKey() {
  const { loading, data } = useQuery(API_KEY_QUERY);

  console.log(data);
  if (data) {
    return <Typography variant="body2">{data.credentials.apiKey}</Typography>;
  } else {
    return <LinearProgress className="progress" color="primary" />;
  }
}
