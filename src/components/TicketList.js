import { Box, Typography, Paper } from '@mui/material';
import TicketItem from './TicketItem';

const TicketList = ({ tickets, onDelete }) => {
  if (tickets.length === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 2 }}>
        No tickets found. Create one to get started!
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      {tickets.map((ticket) => (
        <Paper key={ticket.id} sx={{ mb: 2, p: 2 }}>
          <TicketItem ticket={ticket} onDelete={onDelete} />
        </Paper>
      ))}
    </Box>
  );
};

export default TicketList;