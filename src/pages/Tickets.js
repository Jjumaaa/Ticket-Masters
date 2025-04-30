import { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import TicketList from '../components/TicketList';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchTickets = async () => {
      try {
        
        const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        setTickets(storedTickets);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleDelete = (id) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== id);
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          All Tickets
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <TicketList tickets={tickets} onDelete={handleDelete} />
        )}
      </Box>
    </Container>
  );
};

export default Tickets;