import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import './integration-card.scss';
import { Link } from 'react-router-dom';

export function IntegrationCard({ id, name, description }: { id: string, name: string; description: string }) {
  return (
    <div>
      <CardActionArea className="card-area">
        <Link to={`integration/${id}`} style={{ textDecoration: 'none' }}>
          <Card className="card" elevation={3}>
            <CardContent>
              <Typography variant="h3">{name}</Typography>
              <Typography className="card-body" variant="h5">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </CardActionArea>
    </div>
  );
}
