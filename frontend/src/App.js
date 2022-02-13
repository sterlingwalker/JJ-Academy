import Home from './components/Home';
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Box sx={{padding: '20px'}} >
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
