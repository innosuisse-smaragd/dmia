const questionnaire = {
  resourceType: "Questionnaire",
  title: "Smaragd Questionnaire",
  version: "1.2.0",
  status: "active",
  publisher:
    "Bern University of Applied Sciences - Institute for Medical Informatics I4MI",
  meta: {
    profile: [
      "https://smaragd-6dd61.web.app/StructureDefinition-SmaragdQuestionnaire.html",
    ],
  },
  date: "2023-03-08",
  url: "GENERATED_BY_SERVER",
  item: [
    {
      type: "group",
      linkId: "3617033234783",
      text: "Mammografie-Fragen",
      required: false,
      item: [
        {
          type: "display",
          required: false,
          linkId: "4077759207199",
          text: "Ich stelle zunächst allgemeine Fragen.",
        },
        {
          type: "text",
          linkId: "2367512506151",
          text: "Wie geht es Ihnen heute?",
          required: false,
        },
        {
          type: "choice",
          linkId: "8374981284874",
          text: "Geht es Ihnen heute seit Ihrem letzten Arztbesuch besser, schlechter oder gleichbleibend?",
          required: false,
          repeats: false,
          answerOption: [
            {
              valueCoding: {
                display: "Besser",
              },
            },
            {
              valueCoding: {
                display: "Schlechter",
              },
            },
            {
              valueCoding: {
                display: "Gleichbleibend",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "5053705920031",
          text: "Wann hatten Sie zum letzen Mal Kontakt zu einem Arzt oder einer Ärztin?",
          required: false,
          repeats: false,
          answerOption: [
            {
              valueCoding: {
                display: "Vor ein paar Tagen",
              },
            },
            {
              valueCoding: {
                display: " Vor ein paar Wochen",
              },
            },
            {
              valueCoding: {
                display: "Vor ein paar Monaten ",
              },
            },
            {
              valueCoding: {
                display: "Ich kann mich nicht erinnern",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "908713925250",
          text: "Bei welchem Arzt oder welcher Ärztin waren Sie?",
          enableWhen: [
            {
              question: "5053705920031",
              operator: "!=",
              answerCoding: {
                display: "Ich kann mich nicht erinnern ",
              },
            },
          ],
          required: false,
          repeats: false,
          answerOption: [
            {
              valueCoding: {
                display: "Hausarzt bzw. Hausärztin",
              },
            },
            {
              valueCoding: {
                display: "Gynäkologe bzw. Gynäkologin",
              },
            },
            {
              valueCoding: {
                display: "Anderer Arzt bzw. andere Ärztin",
              },
            },
            {
              valueCoding: {
                display: "Aufenthalt im Spital",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "check-box",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "500934750144",
          text: "Was ist ihr biologisches Geschlecht?",
          required: false,
          repeats: false,
          answerOption: [
            {
              valueCoding: {
                display: " Männlich",
              },
            },
            {
              valueCoding: {
                display: "Weiblich",
              },
            },
            {
              valueCoding: {
                display: "Inter*",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "362820373",
          text: "Sind Sie gegen etwas allergisch? Wählen Sie alle zutreffenden Optionen aus.",
          required: false,
          repeats: true,
          answerOption: [
            {
              valueCoding: {
                display: "Medikamente (z. B. Penicillin, Aspirin)",
              },
            },
            {
              valueCoding: {
                display: "Kontrastmittel",
              },
            },
            {
              valueCoding: {
                display: "Lebensmittel (z. B. Nüsse, Meeresfrüchte)",
              },
            },
            {
              valueCoding: {
                display: "Insektenstiche oder -bisse (z. B. Bienen, Wespen)",
              },
            },
            {
              valueCoding: {
                display: "Andere",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "check-box",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "378699481580",
          text: "Haben Sie seit dem letzten Arzttermin eine Veränderung Ihrer Brust bemerkt?",
          answerOption: [
            {
              valueCoding: {
                display: "Nein",
              },
            },
            {
              valueCoding: {
                display: "Ja",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "4234474633161",
          text: "Konnten oder können Sie die Veränderung ertasten?",
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "378699481580",
              operator: "=",
            },
          ],
          answerOption: [
            {
              valueCoding: {
                display: "Nein",
              },
            },
            {
              valueCoding: {
                display: "Ja",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: true,
          linkId: "4317671598369",
          text: "Auf welcher Seite ist die Veränderung?",
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "378699481580",
              operator: "=",
            },
          ],
          answerOption: [
            {
              valueCoding: {
                display: "Links",
              },
            },
            {
              valueCoding: {
                display: "Rechts",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "text",
          required: false,
          repeats: false,
          linkId: "8116990076089",
          text: "Bitte beschreiben Sie die Veränderung in eigenen Worten.",
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "378699481580",
              operator: "=",
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "442123730417",
          text: "Haben oder hatten Sie seit dem letzten Arzttermin Schmerzen in der Brust?",
          answerOption: [
            {
              valueCoding: {
                display: "Nein",
              },
            },
            {
              valueCoding: {
                display: "Ja",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: true,
          linkId: "6497800652660",
          text: "Auf welcher Seite hatten Sie Schmerzen?",
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "442123730417",
              operator: "=",
            },
          ],
          answerOption: [
            {
              valueCoding: {
                display: "Links",
              },
            },
            {
              valueCoding: {
                display: "Rechts",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "text",
          required: false,
          repeats: false,
          linkId: "8266890503471",
          text: "Bitte beschreiben Sie die Schmerzen in eigenen Worten.",
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "442123730417",
              operator: "=",
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "7807003089839",
          text: "Waren Sie seit dem letzten Arzttermin erkältet?",
          answerOption: [
            {
              valueCoding: {
                display: "Nein",
              },
            },
            {
              valueCoding: {
                display: "Ja",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "1449312689059",
          text: "Hatten Sie seit dem letzten Arzttermin Fieber, Nachtschweiss oder haben Sie ungewollt Gewicht verloren?",
          answerOption: [
            {
              valueCoding: {
                display: "Nein",
              },
            },
            {
              valueCoding: {
                display: "Ja",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "2126250244274",
          text: "Welche Beschwerden hatten oder haben Sie?",
          required: false,
          repeats: true,
          answerOption: [
            {
              valueCoding: {
                display: "Fieber ",
              },
            },
            {
              valueCoding: {
                display: "Nachtschweiss",
              },
            },
            {
              valueCoding: {
                display: "Gewichtsverlust",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "check-box",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "9806161832276",
          text: "Haben Sie seit dem letzten Arzttermin Ihren Arm oder Ihre Hand verletzt (z.B. Schnitt, Stich, Wunde, Verbrennung)?",
          answerOption: [
            {
              valueCoding: {
                display: "Nein",
              },
            },
            {
              valueCoding: {
                display: "Ja",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: true,
          linkId: "3617426907658",
          text: "Auf welcher Seite war die Verletzung?",
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "9806161832276",
              operator: "=",
            },
          ],
          answerOption: [
            {
              valueCoding: {
                display: "Links",
              },
            },
            {
              valueCoding: {
                display: "Rechts",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "text",
          required: false,
          repeats: false,
          linkId: "613647467466",
          text: "Bitte beschreiben Sie die Verletzung in eigenen Worten.",
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "7028160593013",
          text: "Haben Sie seit dem letzten Arzttermin eine Spritze in Ihre Schulter erhalten (z.B. Korstisonspritze, Impfung, etc.)?",
          answerOption: [
            {
              valueCoding: {
                display: "Nein",
              },
            },
            {
              valueCoding: {
                display: "Ja",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: true,
          linkId: "8656983557428",
          text: "Auf welcher Seite liegt die Einstichstelle bzw. die Einstichstellen?",
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "7028160593013",
              operator: "=",
            },
          ],
          answerOption: [
            {
              valueCoding: {
                display: "Links",
              },
            },
            {
              valueCoding: {
                display: "Rechts",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "text",
          required: false,
          repeats: false,
          linkId: "9414557319165",
          text: "Welche Spritze?",
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "7028160593013",
              operator: "=",
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "2829555085654",
          text: "Wann war Ihre letzte Regelblutung?",
          enableWhen: [
            {
              answerCoding: {
                display: " Männlich",
              },
              question: "500934750144",
              operator: "=",
            },
          ],
          answerOption: [
            {
              valueCoding: {
                display: "Vor ein paar Tagen",
              },
            },
            {
              valueCoding: {
                display: "Vor ein paar Wochen",
              },
            },
            {
              valueCoding: {
                display: "Vor ein paar Monaten",
              },
            },
            {
              valueCoding: {
                display: "Ich kann mich nicht erinnern",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: true,
          linkId: "6251452553023",
          text: "Erhalten Sie derzeit eine Hormonersatztherapie oder Anti-Babypille?",
          answerOption: [
            {
              valueCoding: {
                display: " Ja, Hormonersatztherapie",
              },
            },
            {
              valueCoding: {
                display: "Ja, Anti-Babybille",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "3982483526493",
          text: "Sind Sie schwanger oder stillen Sie?",
          enableWhen: [
            {
              answerCoding: {
                display: " Männlich",
              },
              question: "500934750144",
              operator: "=",
            },
          ],
          answerOption: [
            {
              valueCoding: {
                display: "Ich bin schwanger",
              },
            },
            {
              valueCoding: {
                display: "Ich stille",
              },
            },
            {
              valueCoding: {
                display: "Ich bin schwanger und stille ",
              },
            },
            {
              valueCoding: {
                display: "Ich bin weder schwanger noch stille ich",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "integer",
          linkId: "383923832002",
          text: "Wie viele Schwangerschaften hatten Sie insgesamt? Bitte geben Sie die Anzahl ein.",
          required: false,
          repeats: false,
        },
        {
          type: "choice",
          linkId: "2102152287538",
          text: "Wurde seit dem letzten Arzttermin eine Chemotherapie, Strahlentherapie, Operation oder Biopsie der Brust durchgeführt? Bitte wählen Sie alle zutreffenden Optionen.",
          required: false,
          repeats: true,
          answerOption: [
            {
              valueCoding: {
                display: "Chemotherapie",
              },
            },
            {
              valueCoding: {
                display: "Strahlentherapie",
              },
            },
            {
              valueCoding: {
                display: "Operation der Brust ",
              },
            },
            {
              valueCoding: {
                display: "Biopsie der Brust",
              },
            },
            {
              valueCoding: {
                display: "Andere Massnahme",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "check-box",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "text",
          required: false,
          repeats: false,
          linkId: "9650981880447",
          enableWhen: [
            {
              answerCoding: {
                display: "Andere Massnahme",
              },
              question: "2102152287538",
              operator: "!=",
            },
          ],
          text: "Beschreiben Sie durchgeführte Massnahme in eigenen Worten.",
        },
        {
          type: "choice",
          required: false,
          repeats: false,
          linkId: "2543937376179",
          text: "Gibt es noch etwas Wichtiges, was ich dem behandelnden Arzt oder der behandelnden Ärztin mitteilen soll?",
          answerOption: [
            {
              valueCoding: {
                display: "Nein",
              },
            },
            {
              valueCoding: {
                display: "Ja",
              },
            },
          ],
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
              valueCodeableConcept: {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                    code: "radio-button",
                  },
                ],
              },
            },
          ],
        },
        {
          type: "text",
          linkId: "4990110314118",
          text: "Was wollen Sie Ihrem behandelnden Arzt bzw. Ihrer behandelnden Ärztin noch mitteilen?",
          required: false,
          repeats: false,
          enableWhen: [
            {
              answerCoding: {
                display: "Ja",
              },
              question: "2543937376179",
              operator: "=",
            },
          ],
        },
      ],
    },
    {
      type: "end",
      linkId: "6038791184237",
      text: "Vielen Dank, dass Sie sich die Zeit und Mühe gemacht haben die Gesundheitsfragen zu beantworten! Ich wünsche Ihnen einen angenehmen Tag.",
    },
  ],
};

let newQuestionnaire = [];
const questionnaireItems = questionnaire.item;

const handleItemType = (item) => {
  if (item.type === "group") {
    item.item.forEach((subItem) => handleItemType(subItem));
  } else {
    newQuestionnaire.push(item);
  }
};

questionnaireItems.forEach((item) => {
  handleItemType(item);
});

export default newQuestionnaire;
