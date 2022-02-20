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
            <Route path="/journal" element={<Journal />} />
            <Route path="/match-review" element={<MatchReview />} />
            <Route path="/tplookup" element={<TopicLookup />} />
            <Route path="/messages" element={<ChatRoom />} />
            <Route path="/account" element={<Account />} />
          </Routes>
      </Box>
    </div>
  );
}

export default App;
