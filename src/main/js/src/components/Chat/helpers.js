const compareAnswer = (question, answer) => {
  let enabled = false;

  // How the condition and answer should be compared
  switch (question.enableWhen[0].operator) {
    // They should not be equal
    case "!=":
      // If not equal
      if (answer !== question.enableWhen[0].answerCoding.display) {
        // The question should be asked
        enabled = true;
      }
      break;
    // They should be equal
    case "=":
      // If equal
      if (answer === question.enableWhen[0].answerCoding.display) {
        // The question should be asked
        enabled = true;
      }
  }

  return enabled;
};

export const checkEnableQuestion = (question, answer) => {
  let enabled = false;

  if (Array.isArray(answer)) {
    answer.forEach((a) => {
      if (compareAnswer(question, a)) {
        enabled = compareAnswer(question, a);
      }
    });
  } else if (answer === undefined) {
    enabled = false;
  } else {
    enabled = compareAnswer(question, answer);
  }

  return enabled;
};
