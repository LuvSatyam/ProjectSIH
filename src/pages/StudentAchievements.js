// src/pages/StudentAchievements.js

import React from 'react';
import { Container, Typography, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';

const achievements = [
  {
    title: 'National Merit Scholarship',
    recipient: 'Sarah Lee',
    description: 'Awarded for exceptional academic performance.',
    photo: 'https://via.placeholder.com/150', // Replace with real photo URL
  },
  {
    title: 'Student of the Year',
    recipient: 'John Doe',
    description: 'Given for leadership and contributions to campus life.',
    photo: 'https://via.placeholder.com/150', // Replace with real photo URL
  },
  {
    title: 'Excellence in Research Award',
    recipient: 'Emily Davis',
    description: 'Presented for innovative research in environmental science.',
    photo: 'https://via.placeholder.com/150', // Replace with real photo URL
  },
  // Add more achievements as needed
];

function StudentAchievements() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
        Student Achievements
      </Typography>

      <Grid container spacing={4}>
        {/* Overview Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Overview of Student Achievements
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Our students have excelled in various domains, including academics, extracurricular activities, and community service. This section highlights some of the most outstanding achievements of our students over the past year.
            </Typography>
          </Paper>
        </Grid>

        {/* Awards and Honors Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Awards and Honors
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {achievements.map((achievement, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={achievement.title}
                      height="140"
                      image={achievement.photo}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {achievement.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Recipient: {achievement.recipient}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {achievement.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Scholarships Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Scholarships
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              **Scholarships:**
              
              - **Full-Ride Scholarship:** Awarded to Michael Smith for academic excellence and community involvement.
              - **Science and Technology Scholarship:** Given to Anna Brown for outstanding achievements in STEM fields.
              
              [Include details about scholarship criteria and application processes.]
            </Typography>
          </Paper>
        </Grid>

        {/* Special Recognitions Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Special Recognitions
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              **Special Recognitions:**
              
              - **Best Debater Award:** Awarded to Rachel Adams for exceptional performance in national debate competitions.
              - **Community Service Award:** Given to David Wilson for his extensive volunteer work and community outreach.
              
              [Include photos or brief descriptions of special recognitions.]
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default StudentAchievements;
