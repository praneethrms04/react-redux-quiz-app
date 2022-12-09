import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
 
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
    score,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiUrl = `/api.php?amount=${amount_of_questions}&category=${question_category}&difficulty=${question_difficulty}&type=${question_type}`;

  const { response, loading } = useAxios({ url: apiUrl });
  // console.log(response);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/finalscore");
    }
  };

  return (
    <Box>
      <Typography variant="h6" mt={4}>
        Questions {questionIndex + 1}
      </Typography>
      <Typography mt={2}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="outlined">
            {decode(data)}
          </Button>
        </Box>
      ))}

      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
    </Box>
  );
};

export default Questions;
