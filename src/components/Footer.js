// src/components/Footer.js
import { Container, Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="body1">University Annual Report Portal</Typography>
        <Typography variant="body2">© 2024 Your University Name</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
