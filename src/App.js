import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import NewTicket from './pages/NewTicket';
import EditTicket from './pages/EditTicket';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/edit-ticket/:id" element={<EditTicket />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;