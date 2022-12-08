import { Box, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FinalScore from "./pages/FinalScore";
import Home from "./pages/Home";
import Questions from "./pages/Questions";

const App = () => {
  return (
    <div>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/finalscore" element={<FinalScore />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
};

export default App;
