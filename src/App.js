import { Box, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Results from "./pages/Results";

const App = () => {
  return (
    <div>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/finalscore" element={<Results />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
};

export default App;
