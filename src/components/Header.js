// src/components/Header.js
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          University Annual Report Portal
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/academic_performance">Academic Performance</Button>
        <Button color="inherit" component={Link} to="/research_publications">Research Publications</Button>
        <Button color="inherit" component={Link} to="/faculty_info">Faculty Info</Button>
        <Button color="inherit" component={Link} to="/student_achievements">Student Achievements</Button>
        <Button color="inherit" component={Link} to="/financial_reports">Financial Reports</Button>
        <Button color="inherit" component={Link} to="/infrastructure_development">Infrastructure Development</Button>
      </Toolbar>
    </AppBar>
  );
}


export default Header;
