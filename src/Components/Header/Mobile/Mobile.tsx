import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import "../Header.css";

function Mobile() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer =
  (open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <div className="mobile-menu">
      <MenuIcon
        fontSize="large"
        style={{ color: "#fff" }}
        onClick={toggleDrawer(true)}
      />
      <Drawer open={openDrawer} anchor="right" onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link className="mobile-menu-item-link" to="/home">
                    Home
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link className="mobile-menu-item-link" to="/news">
                    News
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link className="mobile-menu-item-link" to="/characters">
                    Characters
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
      </Drawer>
    </div>
  );
}

export default Mobile;
