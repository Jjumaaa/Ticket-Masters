import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import TicketForm from '../components/TicketForm';

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const ticketToEdit = storedTickets.find(t => t.id === id);
    
    if (ticketToEdit) {
      setTicket(ticketToEdit);
    } else {
      navigate('/tickets', { replace: true });
    }
    setLoading(false);
  }, [id, navigate]);

  const handleSubmit = (updatedTicket) => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const updatedTickets = storedTickets.map(t => 
      t.id === id ? updatedTicket : t
    );
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    navigate('/tickets');
  };

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Edit Ticket
        </Typography>
        {ticket && (
          <TicketForm 
            onSubmit={handleSubmit} 
            initialData={ticket}
          />
        )}
      </Box>
    </Container>
  );
};

export default EditTicket;