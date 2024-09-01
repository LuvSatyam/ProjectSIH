// src/pages/ResearchPublications.js

import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, TextField, List, ListItem, ListItemText } from '@mui/material';

const mockPublications = [
  { title: 'Renewable Energy Advances', authors: 'Dr. Alice Johnson', year: 2023, summary: 'Explores new methods for harnessing solar energy.' },
  { title: 'AI in Healthcare', authors: 'Prof. Robert Smith', year: 2022, summary: 'Improves diagnostic accuracy using AI algorithms.' },
  // Add more mock data or fetch from API
];

function ResearchPublications() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPublications = mockPublications.filter(publication =>
    publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.authors.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
        Research Publications
      </Typography>

      <Grid container spacing={4}>
        {/* Research Highlights Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Research Highlights
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              **Research Highlights:**
              
              - **Project on Renewable Energy:** This groundbreaking study explores new methods for harnessing solar energy, leading to a 20% increase in efficiency.
              - **AI in Healthcare:** Researchers have developed an AI algorithm that improves diagnostic accuracy by 15%.
              
              [Include images or brief summaries of key research projects.]
            </Typography>
          </Paper>
        </Grid>

        {/* Publications Database Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Publications Database
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ mb: 2 }}
            />
            <List>
              {filteredPublications.map((publication, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={publication.title}
                    secondary={`${publication.authors} (${publication.year})`}
                    secondaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Faculty Contributions Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Faculty Contributions
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              **Faculty Contributions:**
              
              - **Dr. Alice Johnson:** Her research on quantum computing has been cited in over 200 papers and has significantly advanced the field.
              - **Prof. Robert Smith:** Known for his work in genetic engineering, which has led to new advancements in gene therapy.
              
              [Include faculty profiles with links to their research work.]
            </Typography>
          </Paper>
        </Grid>

        {/* Research Metrics Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Research Metrics
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              **Research Metrics:**
              
              Our research output has shown a remarkable increase in citation counts over the past five years. 
              
              - **Total Citations:** 10,000+
              - **Average Impact Factor:** 3.5
              - **Total Research Funding:** $2 million
              
              [Include graphs showing citation trends and funding over the years.]
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ResearchPublications;
