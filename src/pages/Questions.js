import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();
  const handleClickAnswer = (e) => {
    e.preventDefault();
    navigate("/finalScore");
  };
  return (
    <Box>
      <Typography variant="h4">Questions </Typography>
      <Typography mt={5}>response.results[questionIndex].question</Typography>

      <Box mt={2}>
        <Button onClick={handleClickAnswer} variant="contained">
          decode
        </Button>
      </Box>

      <Box mt={5}>Score: 6 / 10</Box>
    </Box>
  );
};

export default Questions;
