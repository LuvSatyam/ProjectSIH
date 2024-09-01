import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function IconLabelTabs() {
  const location = useLocation();
  const navigate = useNavigate();

  const getTabValue = (path) => {
    switch (path) {
      case '/':
        return 0;
      case '/academic_performance':
        return 1;
      case '/research_publications':
        return 2;
      case '/faculty_info':
        return 3;
      case '/student_achievements':
        return 4;
      case '/financial_reports':
        return 5;
      case '/infrastructure_development':
        return 6;
      default:
        return 0;
    }
  };

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/academic_performance');
        break;
      case 2:
        navigate('/research_publications');
        break;
      case 3:
        navigate('/faculty_info');
        break;
      case 4:
        navigate('/student_achievements');
        break;
      case 5:
        navigate('/financial_reports');
        break;
      case 6:
        navigate('/infrastructure_development');
        break;
      default:
        break;
    }
  };

  return (
    <Tabs
      value={getTabValue(location.pathname)}
      onChange={handleChange}
      aria-label="icon label tabs example"
      variant="fullWidth"
      TabIndicatorProps={{ style: { backgroundColor: 'white' } }}
      sx={{
        minHeight: '48px',
        '& .MuiTab-root': {
          minHeight: '48px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 200,
          textTransform: 'none',
        },
        '& .MuiTab-root.Mui-selected': {
          color: '#fff',
        },
      }}
    >
      <Tab icon={<HomeIcon />} label="Home" />
      <Tab icon={<SchoolIcon />} label="Academic Performance" />
      <Tab icon={<MenuBookIcon />} label="Research Publications" />
      <Tab icon={<PeopleIcon />} label="Faculty Info" />
      <Tab icon={<EmojiEventsIcon />} label="Student Achievements" />
      <Tab icon={<AttachMoneyIcon />} label="Financial Reports" />
      <Tab icon={<ApartmentIcon />} label="Infrastructure Development" />
    </Tabs>
  );
}
