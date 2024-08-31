// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { School, Science, People, Assessment, AttachMoney, Engineering } from '@mui/icons-material';
import Header from './components/Header';
import Footer from './components/Footer';
import AcademicPerformance from './pages/AcademicPerformance';
import ResearchPublications from './pages/ResearchPublications';
import FacultyInfo from './pages/FacultyInfo';
import StudentAchievements from './pages/StudentAchievements';
import FinancialReports from './pages/FinancialReports';
import InfrastructureDevelopment from './pages/InfrastructureDevelopment';

function App() {
  return (
    <Router>
      <Header />
      <Box sx={{ minHeight: 'calc(100vh - 64px - 100px)', paddingBottom: '100px' }}>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  backgroundImage: 'url(https://source.unsplash.com/1600x900/?university-campus)',
                  backgroundSize: 'cover',
                  height: '100vh',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}
                >
                  <Container>
                    <Typography variant="h2" align="center" gutterBottom>
                      University Annual Report Portal
                    </Typography>
                    <Typography variant="h6" align="center" paragraph>
                      Your gateway to comprehensive annual insights
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<School />}
                          component={Link}
                          to="/academic_performance"
                        >
                          Academic Performance
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<Science />}
                          component={Link}
                          to="/research_publications"
                        >
                          Research Publications
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<People />}
                          component={Link}
                          to="/faculty_info"
                        >
                          Faculty Information
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<Assessment />}
                          component={Link}
                          to="/student_achievements"
                        >
                          Student Achievements
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<AttachMoney />}
                          component={Link}
                          to="/financial_reports"
                        >
                          Financial Reports
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<Engineering />}
                          component={Link}
                          to="/infrastructure_development"
                        >
                          Infrastructure Development
                        </Button>
                      </Grid>
                    </Grid>
                  </Container>
                </Box>
              </div>
            }
          />
          <Route path="/academic_performance" element={<AcademicPerformance />} />
          <Route path="/research_publications" element={<ResearchPublications />} />
          <Route path="/faculty_info" element={<FacultyInfo />} />
          <Route path="/student_achievements" element={<StudentAchievements />} />
          <Route path="/financial_reports" element={<FinancialReports />} />
          <Route path="/infrastructure_development" element={<InfrastructureDevelopment />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
