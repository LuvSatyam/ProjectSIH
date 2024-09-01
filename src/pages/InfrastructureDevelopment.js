// src/pages/InfrastructureDevelopment.js

import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

function InfrastructureDevelopment() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
        Infrastructure Development
      </Typography>

      <Grid container spacing={4}>
        {/* Overview Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Overview
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              The Infrastructure Development section highlights our ongoing and completed projects aimed at enhancing the university's facilities and resources. This includes improvements to buildings, technology infrastructure, sustainability initiatives, and campus expansion projects.
            </Typography>
          </Paper>
        </Grid>

        {/* Recent Projects Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Recent Projects
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                **Library Expansion:** The new wing of the university library includes additional study spaces, collaborative workrooms, and a digital media center.
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                **Research Labs:** State-of-the-art research labs have been established in the Computer Science and Biology departments, equipped with the latest technology and resources.
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                **Sustainability Initiatives:** Installation of solar panels across campus buildings and implementation of a campus-wide recycling program to promote sustainability.
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                **New Dormitories:** Construction of two new dormitory buildings to accommodate the growing student population, with modern amenities and energy-efficient designs.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Future Plans Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Future Plans
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                **Science and Technology Building:** Plans are underway for a new Science and Technology building that will house advanced laboratories, lecture halls, and collaborative spaces.
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                **Green Campus Initiative:** Continued efforts to reduce the university’s carbon footprint, including the development of green spaces, water conservation programs, and energy-efficient building designs.
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                **Athletic Facilities:** Expansion of athletic facilities with the addition of new fields, courts, and a multi-purpose sports complex.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Technology Upgrades Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Technology Upgrades
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                **Campus Wi-Fi Expansion:** Upgrade and expansion of the campus Wi-Fi network to ensure fast, reliable internet access across all areas, including outdoor spaces.
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                **Smart Classrooms:** Implementation of smart classroom technology in several lecture halls, featuring interactive whiteboards, digital projectors, and video conferencing capabilities.
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                **Data Center Modernization:** Upgrades to the university's data center to support increased digital storage needs, improved cybersecurity measures, and faster processing capabilities.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InfrastructureDevelopment;
