import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleScoreChange } from "../redux/actions";

const Results = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    navigate("/");
  };
  return (
    <Box mt={5}>
      <Typography mr={5} variant="h5" fontWeight="bold" mb={3}>
        Your final score is : {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Go To Home
      </Button>
    </Box>
  );
};

export default Results;
