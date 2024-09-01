// src/pages/FinancialReports.js

import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// Example data for charts
const incomeData = [
  { name: 'Tuition Fees', value: 10000000 },
  { name: 'Government Grants', value: 5000000 },
  { name: 'Donations', value: 2000000 },
  { name: 'Research Funding', value: 3000000 },
];

const expenditureData = [
  { name: 'Faculty Salaries', value: 8000000 },
  { name: 'Administrative Costs', value: 2000000 },
  { name: 'Infrastructure Maintenance', value: 1500000 },
  { name: 'Student Support Services', value: 1000000 },
];

const budgetAllocationData = [
  { name: 'Computer Science', value: 2000000 },
  { name: 'Biology', value: 1500000 },
  { name: 'Economics', value: 1200000 },
  { name: 'Campus Renovation', value: 1000000 },
  { name: 'Research Projects', value: 2500000 },
];

function FinancialReports() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
        Financial Reports
      </Typography>

      <Grid container spacing={4}>
        {/* Financial Summary Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Financial Summary
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              The financial summary provides an overview of our institution’s fiscal health, including key figures related to income, expenditures, and budget allocations. This summary highlights the major sources of revenue and the primary areas of expenditure.
            </Typography>
          </Paper>
        </Grid>

        {/* Income and Expenditures Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Income and Expenditures
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Income Sources</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={incomeData} dataKey="value" nameKey="name" outerRadius={150} fill="#8884d8">
                      {incomeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#8884d8', '#ff7300', '#00C49F', '#FFBB28'][index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Expenditures</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={expenditureData} dataKey="value" nameKey="name" outerRadius={150} fill="#82ca9d">
                      {expenditureData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#82ca9d', '#8884d8', '#ffc658', '#d0ed57'][index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Budget Allocations Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Budget Allocations
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetAllocationData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Financial Metrics Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Financial Metrics
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                **Operating Surplus/Deficit:** $500,000 surplus
              </Typography>
              <Typography variant="body1">
                **Debt Levels:** $1,000,000 in long-term debt
              </Typography>
              <Typography variant="body1">
                **Current Ratio:** 2.5 (current assets/current liabilities)
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FinancialReports;
