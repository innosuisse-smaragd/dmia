export const RIGHT_NAME_MESSAGE = {
  type: "login",
  text: "Ich habe Sie gefunden. Bitte nennen Sie mir nun Ihr Geburtsdatum (TT.MM.JJJJ).",
  linkId: "3",
};

export const WRONG_NAME_MESSAGE = {
  type: "checkName",
  text: "Der von Ihnen eingegebene Name war falsch. Bitte versuche Sie es erneut.",
  linkId: "4",
};

export const END_NAME_MESSAGE = {
  type: "end",
  text: "Ich konnte Sie nicht finden. Bitte überprüfen Sie, ob Sie Ihren Namen richtig eingegeben haben. Falls ja, wenden Sie Sich bitte an einen Mitarbeiter oder eine Mitarbeiterin.",
  linkId: "5",
};

export const RIGHT_LOGIN_MESSAGE = (userName) => {
  return {
    type: "display",
    text: `Guten Tag, ${userName}! Ich konnte Sie erfolgreich erfassen.`,
    linkId: "6",
  };
};

export const WRONG_LOGIN_MESSAGE = {
  type: "login",
  text: "Das von Ihnen eingegebene Datum war falsch. Bitte versuche Sie es erneut.",
  linkId: "7",
};

export const END_LOGIN_MESSAGE = {
  type: "end",
  text: "Ich konnte Sie nicht anhand Ihres Geburtsdatums erfassen. Bitte überprüfen Sie, ob Sie das Datum richtig eingegeben haben. Falls ja, wenden Sie Sich bitte an einen Mitarbeiter oder eine Mitarbeiterin.",
  linkId: "8",
};

export const MESSAGE_DELAY = 2000;
