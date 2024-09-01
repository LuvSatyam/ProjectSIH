// src/components/Header.js
import { AppBar, Toolbar, Typography } from '@mui/material';
import IconLabelTabs from './IconLabelTabs'; // Adjust the import path as necessary

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          University Annual Report Portal
        </Typography>
        <IconLabelTabs />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
