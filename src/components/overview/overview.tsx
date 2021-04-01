import React from 'react';
import { Typography } from '@material-ui/core';

export function Overview({ description }: { description: string }) {
  return (
    <div>
      <Typography variant="h4">Overview</Typography>
      <Typography variant="body1">{description}</Typography>
    </div>
  );
}
