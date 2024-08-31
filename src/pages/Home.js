// src/pages/Home.js
import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { School, Science, People, Assessment, AttachMoney, Engineering } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1552900768-8b5f6f1163e0?&auto=format&fit=crop&w=1950&q=80)', // Replace with your desired image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.6)',
        }}
      ></Box>
      <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          University Annual Report Portal
        </Typography>
        <Typography variant="h6" paragraph>
          Your gateway to comprehensive annual insights
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<School />}
              component={RouterLink}
              to="/academic-performance"
              size="large"
            >
              Academic Performance
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Science />}
              component={RouterLink}
              to="/research-publications"
              size="large"
            >
              Research Publications
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<People />}
              component={RouterLink}
              to="/faculty-info"
              size="large"
            >
              Faculty Information
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Assessment />}
              component={RouterLink}
              to="/student-achievements"
              size="large"
            >
              Student Achievements
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AttachMoney />}
              component={RouterLink}
              to="/financial-reports"
              size="large"
            >
              Financial Reports
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Engineering />}
              component={RouterLink}
              to="/infrastructure-development"
              size="large"
            >
              Infrastructure Development
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
