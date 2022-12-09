import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
const Home = () => {
  const navigate = useNavigate();
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];
  const sumbitHandler = (e) => {
    e.preventDefault();
    navigate("/questions");
  };
  return (
    <>
      <Container fluid variant="success">
        <Typography variant="h4" fontWeight="bolder" textAlign="center" pt={5}>
          Quiz App
        </Typography>
        <form textAlign="center" onSubmit={sumbitHandler}>
          <SelectField options={response.trivia_categories} label="Category" />
          <SelectField options={difficultyOptions} label="Difficulty" />
          <SelectField options={typeOptions} label="Type" />
          <TextFieldComp />
          <Box mt={3} width="100%">
            <Button fullWidth variant="contained" color="success" type="submit">
              Get Started
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Home;
