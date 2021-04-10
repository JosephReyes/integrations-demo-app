import { IconButton, LinearProgress, Typography } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import './key-box.scss';

const bullet = String.fromCharCode(8226);

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
  const [data, setData] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(true);
    }, 1000);
    return () => clearTimeout(timer);
  });
  
  if (data) {
    return <Typography variant="body2">###some-random-key###</Typography>;
  } else {
    return <LinearProgress className="progress" color="primary" />;
  }
}
