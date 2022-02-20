import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';


const settings = ['Profile', 'Account', 'Logout'];

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        //event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavBar() {
  const [drawerOpen, toggleDrawer] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = React.useState(window.location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            JJ-Academy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => toggleDrawer(!drawerOpen)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={drawerOpen}
              onClose={() => toggleDrawer(!drawerOpen)}
            >
              <Tabs orientation="vertical" textColor="inherit" indicatorColor="secondary" value={value} onChange={handleChange} aria-label="nav tabs">
                <LinkTab label="Home" to="/" />
                <LinkTab label="Journal" to="/journal" />
                <LinkTab label="Match Review" to="/match-review" />
                <LinkTab label="Topic Lookup" to="/tplookup" />
                <LinkTab label="Messages" to="/messages" />
                <LinkTab label="Account" to="/account" />
              </Tabs>
            </Drawer>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            JJ-Academy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={handleChange} aria-label="nav tabs">
              <LinkTab label="Home" to="/" value="/"/>
              <LinkTab label="Journal" to="/journal" value="/journal"/>
              <LinkTab label="Match Review" to="/match-review" />
              <LinkTab label="Topic Lookup" to="/tplookup" />
              <LinkTab label="Messages" to="/messages" />
              <LinkTab label="Account" to="/account" />
            </Tabs>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
