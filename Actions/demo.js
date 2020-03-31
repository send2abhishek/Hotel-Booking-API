const Calcualtion = num => {
  if (num > 0) {
    return 1;
  } else {
    return -1;
  }
};

const stringEval = data => {
  return "welcome Aryan" + data;
};

const getCurrency = () => {
  return ["USD", "INR"];
};

module.exports = {
  numCal: Calcualtion,
  stringCal: stringEval,
  getCurrency
};
