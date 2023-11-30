const onboarding = {
  item: [
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
      type: "text",
      text: "Bitte geben Sie zuerst Ihren Namen ein",
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
    {
      type: "date",
      text: "Ich habe Sie gefunden. Bitte nennen Sie mir nun Ihr Geburtsdatum (TT.MM.JJJJ).",
      linkId: "3",
      enableWhen: [
        {
          answerCoding: {
            display: "Alex Müller",
          },
          question: "2",
          operator: "=",
        },
      ],
    },
    {
      type: "text",
      text: "Der von Ihnen eingegebene Name war falsch. Bitte versuche Sie es erneut.",
      linkId: "4",
      enableWhen: [
        {
          answerCoding: {
            display: "Alex Müller",
          },
          question: "2",
          operator: "!=",
        },
      ],
    },
    {
      type: "date",
      text: "Ich habe Sie gefunden. Bitte nennen Sie mir nun Ihr Geburtsdatum (TT.MM.JJJJ).",
      linkId: "5",
      enableWhen: [
        {
          answerCoding: {
            display: "Alex Müller",
          },
          question: "4",
          operator: "=",
        },
      ],
    },
    {
      type: "end",
      text: "Ich konnte Sie nicht finden. Bitte überprüfen Sie, ob Sie Ihren Namen richtig eingegeben haben. Falls ja, wenden Sie Sich bitte an einen Mitarbeiter oder eine Mitarbeiterin.",
      enableWhen: [
        {
          answerCoding: {
            display: "Alex Müller",
          },
          question: "4",
          operator: "!=",
        },
      ],
    },
    {
      type: "display",
      text: "Guten Tag, Alex Müller! Ich konnte Sie erfolgreich erfassen.",
      enableWhen: [
        {
          answerCoding: {
            display: "25.08.1973",
          },
          question: "3",
          operator: "=",
        },
      ],
    },
    {
      type: "date",
      linkId: "6",
      text: "Das von Ihnen eingegebene Datum war falsch. Bitte versuche Sie es erneut.",
      enableWhen: [
        {
          answerCoding: {
            display: "25.08.1973",
          },
          question: "3",
          operator: "!=",
        },
      ],
    },
    {
      type: "display",
      text: "Guten Tag, Alex Müller! Ich konnte Sie erfolgreich erfassen.",
      enableWhen: [
        {
          answerCoding: {
            display: "25.08.1973",
          },
          question: "6",
          operator: "=",
        },
      ],
    },
    {
      type: "end",
      text: "Ich konnte Sie nicht anhand Ihres Geburtsdatums erfassen. Bitte überprüfen Sie, ob Sie das Datum richtig eingegeben haben. Falls ja, wenden Sie Sich bitte an einen Mitarbeiter oder eine Mitarbeiterin.",
      enableWhen: [
        {
          answerCoding: {
            display: "25.08.1973",
          },
          question: "6",
          operator: "!=",
        },
      ],
    },
    {
      type: "date",
      linkId: "7",
      text: "Das von Ihnen eingegebene Datum war falsch. Bitte versuche Sie es erneut.",
      enableWhen: [
        {
          answerCoding: {
            display: "25.08.1973",
          },
          question: "5",
          operator: "!=",
        },
      ],
    },
    {
      type: "display",
      text: "Guten Tag, Alex Müller! Ich konnte Sie erfolgreich erfassen.",
      enableWhen: [
        {
          answerCoding: {
            display: "25.08.1973",
          },
          question: "5",
          operator: "=",
        },
      ],
    },
    {
      type: "display",
      text: "Guten Tag, Alex Müller! Ich konnte Sie erfolgreich erfassen.",
      enableWhen: [
        {
          answerCoding: {
            display: "25.08.1973",
          },
          question: "7",
          operator: "=",
        },
      ],
    },
    {
      type: "end",
      text: "Ich konnte Sie nicht anhand Ihres Geburtsdatums erfassen. Bitte überprüfen Sie, ob Sie das Datum richtig eingegeben haben. Falls ja, wenden Sie Sich bitte an einen Mitarbeiter oder eine Mitarbeiterin.",
      enableWhen: [
        {
          answerCoding: {
            display: "25.08.1973",
          },
          question: "7",
          operator: "!=",
        },
      ],
    },
  ],
};

let newOnboarding = [];
const onboardingItems = onboarding.item;

const handleItemType = (item) => {
  if (item.type === "group") {
    item.item.forEach((subItem) => handleItemType(subItem));
  } else {
    newOnboarding.push(item);
  }
};

onboardingItems.forEach((item) => {
  handleItemType(item);
});

export default newOnboarding;
