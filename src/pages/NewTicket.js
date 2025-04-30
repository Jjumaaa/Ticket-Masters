import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import TicketForm from '../components/TicketForm';

const NewTicket = () => {
  const navigate = useNavigate();

  const handleSubmit = (ticket) => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const updatedTickets = [...tickets, ticket];
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    navigate('/tickets');
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Create New Ticket
        </Typography>
        <TicketForm onSubmit={handleSubmit} />
      </Box>
    </Container>
  );
};

export default NewTicket;