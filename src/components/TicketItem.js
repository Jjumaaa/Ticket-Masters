import { 
    Typography, 
    Button, 
    Chip, 
    Stack,
    Divider 
  } from '@mui/material';
  import { Delete, Edit } from '@mui/icons-material';
  import { useNavigate } from 'react-router-dom';
  
  const TicketItem = ({ ticket, onDelete }) => {
    const navigate = useNavigate();
    
    const getPriorityColor = (priority) => {
      switch (priority) {
        case 'high': return 'error';
        case 'medium': return 'warning';
        case 'low': return 'success';
        default: return 'default';
      }
    };
  
    const getStatusColor = (status) => {
      switch (status) {
        case 'open': return 'primary';
        case 'in-progress': return 'secondary';
        case 'resolved': return 'success';
        default: return 'default';
      }
    };
  
    return (
      <div>
        <Typography variant="h5" component="h2">
          {ticket.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {new Date(ticket.createdAt).toLocaleString()}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
          {ticket.description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip 
            label={`Priority: ${ticket.priority}`} 
            color={getPriorityColor(ticket.priority)} 
          />
          <Chip 
            label={`Status: ${ticket.status}`} 
            color={getStatusColor(ticket.status)} 
          />
        </Stack>
        <Divider sx={{ my: 1 }} />
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={() => navigate(`/edit-ticket/${ticket.id}`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            startIcon={<Delete />}
            onClick={() => onDelete(ticket.id)}
            color="error"
          >
            Delete
          </Button>
        </Stack>
      </div>
    );
  };
  
  export default TicketItem;