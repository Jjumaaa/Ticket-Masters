import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ticket App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/tickets">
          Tickets
        </Button>
        <Button color="inherit" component={Link} to="/new-ticket">
          New Ticket
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;