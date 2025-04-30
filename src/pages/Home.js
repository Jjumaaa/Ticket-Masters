import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Ticket App
        </Typography>
        <Typography variant="body1">
          Manage your support tickets efficiently.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;