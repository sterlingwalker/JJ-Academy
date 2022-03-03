import * as React from 'react';
import Home from './components/Home';
import Journal from './components/Journal'
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import {
  Routes,
  Route
} from "react-router-dom";
import MatchReview from './components/MatchReview';
import TopicLookup from './components/TopicLookup';
import ChatRoom from './components/ChatRoom';
import Account from './components/Account';

function App() {
  return (
    <div>
      <NavBar />
      <Box sx={{padding: '20px'}} >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/journal" element={<Journal />} />
            <Route exact path="/match-review" element={<MatchReview />} />
            <Route exact path="/tplookup" element={<TopicLookup />} />
            <Route exact path="/messages" element={<ChatRoom />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
      </Box>
    </div>
  );
}

export default App;
