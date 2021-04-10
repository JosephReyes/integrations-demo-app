import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, SvgIconTypeMap,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import { AttachMoney, ImportExport } from '@material-ui/icons';
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export function Header({ Logo }: { Logo: OverridableComponent<SvgIconTypeMap<{}, "svg">> }) {
  return (
    <div className="root">
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="toolbar">
          <Logo />
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer className="drawer" variant="permanent">
        <Toolbar />
        <List className="list">
          <ListItem button component={Link} to="/library">
            <ListItemIcon>
              <AttachMoney />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">Library</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
