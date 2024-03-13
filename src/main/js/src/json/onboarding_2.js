const onboarding = [
  {
    type: "display",
    text: "Herzlich willkommen in der Campusradiologie des Lindenhofspitals in Bern.",
  },
  {
    type: "display",
    text: "Mein Name ist Mia und ich bin ein digitaler Assistent. Gemeinsam mit Ihnen werde ich wichtige medizinische Daten und Informationen zu Ihrer Krankengeschichte erheben. Auch zu Ihrem aktuellem Befinden werde ich Ihnen Fragen stellen. ",
  },
  {
    type: "display",
    text: "Ihre Angaben werden vertraulich behandelt und verbleiben - ausgenommen von Befund-Inhalten -  innerhalb des Lindenhofspitals.",
  },
  {
    type: "display",
    text: "Sie antworten mir, indem Sie entweder einen meiner Vorschläge auswählen oder Ihre Antwort in das vorgesehene Textfeld tippen und absenden. Lassen Sie uns das gleich versuchen.",
  },
  {
    type: "choice",
    text: 'Wenn Sie die Befragung weiterhin mit mir durchführen möchten, klicken Sie "Ja".',
    linkId: "1",
    repeats: false,
    answerOption: [
      {
        valueCoding: {
          display: "Ja",
        },
      },
      {
        valueCoding: {
          display: "Nein",
        },
      },
    ],
  },
  {
    type: "end",
    text: "Bitte wenden Sie sich an einen Mitarbeiter oder eine Mitarbeiterin.",
    enableWhen: [
      {
        answerCoding: {
          display: "Nein",
        },
        question: "1",
        operator: "=",
      },
    ],
  },
  {
    type: "display",
    text: "Vielen Dank für Ihr Vertrauen. Ich werde Sie nun anhand ihres Geburtsdatums und Ihres Namens erfassen",
    enableWhen: [
      {
        answerCoding: {
          display: "Ja",
        },
        question: "1",
        operator: "=",
      },
    ],
  },
  {
    type: "checkName",
    text: "Bitte geben Sie zuerst Ihren Namen (Vorname Name) ein",
    linkId: "2",
    enableWhen: [
      {
        answerCoding: {
          display: "Ja",
        },
        question: "1",
        operator: "=",
      },
    ],
  },
];

export default onboarding;
