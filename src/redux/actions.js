import {
  CHANGE_CATEGORY,
  CHANGE_TYPE,
  CHANGE_DIFFICULTY,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
} from "./actionTypes";

export const handleCategoryChange = (payload) => {
  return {
    type: CHANGE_CATEGORY,
    payload,
  };
};

export const handleDifficultyChange = (payload) => {
  return {
    type: CHANGE_DIFFICULTY,
    payload,
  };
};

export const handleTypeChange = (payload) => {
  return {
    type: CHANGE_TYPE,
    payload,
  };
};
export const handleAmountChange = (payload) => {
  return {
    type: CHANGE_AMOUNT,
    payload,
  };
};
export const handleScoreChange = (payload) => {
  return {
    type: CHANGE_SCORE,
    payload,
  };
};
