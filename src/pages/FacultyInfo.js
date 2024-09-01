// src/pages/FacultyInfo.js

import React from 'react';
import { Container, Typography, Grid, Paper, Card, CardContent, CardMedia, Button } from '@mui/material';

const facultyMembers = [
  {
    name: 'Dr. Alice Johnson',
    title: 'Professor of Computer Science',
    researchInterests: 'Artificial Intelligence, Machine Learning',
    contact: 'alice.johnson@example.edu',
    photo: 'https://via.placeholder.com/150', // Replace with real photo URL
    publications: '/publications/alice-johnson' // Replace with real link
  },
  {
    name: 'Prof. Robert Smith',
    title: 'Chair of the Department of Biology',
    researchInterests: 'Molecular Genetics, Gene Therapy',
    contact: 'robert.smith@example.edu',
    photo: 'https://via.placeholder.com/150', // Replace with real photo URL
    publications: '/publications/robert-smith' // Replace with real link
  },
  // Add more faculty members as needed
];

function FacultyInfo() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
        Faculty Info
      </Typography>

      <Grid container spacing={4}>
        {/* Faculty Directory Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Faculty Directory
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {facultyMembers.map((faculty, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={faculty.name}
                      height="140"
                      image={faculty.photo}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {faculty.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {faculty.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Research Interests:</strong> {faculty.researchInterests}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Contact:</strong> {faculty.contact}
                      </Typography>
                      <Button variant="outlined" color="primary" sx={{ mt: 2 }} href={faculty.publications}>
                        View Publications
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Faculty Achievements Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Faculty Achievements
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              **Faculty Achievements:**
              
              - **Dr. Alice Johnson:** Received the National Science Foundation (NSF) Award for Excellence in Research in 2023.
              - **Prof. Robert Smith:** Awarded the prestigious XYZ Medal for groundbreaking research in gene therapy in 2022.
              
              [Include details of awards and recognitions.]
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FacultyInfo;
