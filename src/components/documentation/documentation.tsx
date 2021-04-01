import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

export function Documentation({ link }: { link: string }) {
  return (
    <div>
      <Typography variant="h4">Documentation</Typography>
      <Link to={{ pathname: link }} target="_blank">
        External docs
      </Link>
    </div>
  );
}
