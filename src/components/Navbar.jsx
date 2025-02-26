
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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar({ setCategory }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem("darkMode") === "true");
  const [customTheme, setCustomTheme] = React.useState(localStorage.getItem("customTheme") === "true");

  React.useEffect(() => {
    if (customTheme) {
      document.documentElement.classList.remove("dark"); // Disable dark mode
      document.documentElement.classList.add("custom-theme"); // Apply custom theme
      localStorage.setItem("customTheme", "true");
    } else {
      document.documentElement.classList.remove("custom-theme"); // Remove custom theme
      localStorage.setItem("customTheme", "false");
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode, customTheme]);

  const toggleDarkMode = () => {
    if (!customTheme) setDarkMode(!darkMode); // Only toggle if custom theme is disabled
    localStorage.setItem("darkMode", !darkMode);
  };

  const toggleCustomTheme = () => {
    setCustomTheme(!customTheme);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{
        backgroundColor: customTheme ? 'black' : darkMode ? 'black' : 'white',
        color: darkMode || customTheme ? 'white' : 'black'
      }}>
        <Toolbar disableGutters>
          <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NEWS BLOG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {categories.map((category) => (
                <MenuItem key={category} onClick={() => { setCategory(category); handleCloseNavMenu(); }}>
                  <Typography>{category}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            {categories.map((category) => (
              <Button key={category} onClick={() => setCategory(category)} sx={{ my: 2, color: darkMode || customTheme ? 'white' : 'black' }}>
                {category}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography>{setting}</Typography>
                </MenuItem>
              ))}
              {/* Custom Theme Toggle */}
              <MenuItem onClick={toggleCustomTheme}>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ColorLensIcon /> {customTheme ? "Disable Custom Theme" : "Enable Custom Theme"}
                </Typography>
              </MenuItem>
              {/* Dark Mode Toggle (only works if custom theme is disabled) */}
              <MenuItem onClick={toggleDarkMode} disabled={customTheme}>
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {darkMode ? <LightModeIcon /> : <DarkModeIcon />} {darkMode ? "Light Mode" : "Dark Mode"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

