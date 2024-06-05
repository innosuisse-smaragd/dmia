export const generateQuestionnaireResponse = (
  questionnaire,
  questions,
  answers,
  task
) => {
  let item = [];

  answers.forEach((answer) => {
    if (answer.isQuestionnaireResponse && answer.questionLinkId !== "1") {
      let question = questions.find((q) => q.linkId === answer.questionLinkId);
      let questionItem = {
        answer: [],
        linkId: question.linkId,
        text: question.text,
      };
      if (question.type === "text") {
        questionItem.answer.push({ valueString: answer.text });
      } else if (question.type === "choice") {
        if (question.repeats === false) {
          questionItem.answer.push({ valueCoding: { display: answer.text } });
        } else {
          answer.text.forEach((a) =>
            questionItem.answer.push({ valueCoding: { display: a } })
          );
        }
      } else if (question.type === "integer") {
        questionItem.answer.push({ valueInteger: parseInt(answer.text) });
      }

      item.push(questionItem);
    }
  });

  const date = new Date().toISOString();
  const patient = task.contained.find((t) => t.resourceType === "Patient");

  const questionnaireUrl = task.input.find(
    (input) => input.type.coding[0].code === "questionnaire"
  ).valueCanonical;

  let questionnaireResponse = {
    resourceType: "QuestionnaireResponse",
    id: null,
    meta: {
      profile: [
        "http://somewhere.org/fhir/uv/myig/StructureDefinition/SmaragdQuestionnaireResponse",
      ],
    },
    contained: [patient],
    status: "completed",
    authored: date,
    source: {
      reference: `#${patient.id}`,
    },
    questionnaire: questionnaireUrl,
    item: [
      {
        linkId: questionnaire.item[0].linkId,
        text: questionnaire.item[0].text,
        item,
      },
    ],
  };

  return questionnaireResponse;
};
