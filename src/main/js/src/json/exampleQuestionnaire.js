const exampleQuestionnaire = {
  resourceType: "Questionnaire",
  id: "GENERATED_BY_SERVER",
  meta: {
    profile: [
      "http://somewhere.org/fhir/uv/myig/StructureDefinition/SmaragdQuestionnaire",
    ],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><b>Structure</b><table border="1" cellpadding="0" cellspacing="0" style="border: 1px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top;"><tr style="border: 2px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top"><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="The linkId for the item">LinkId</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="Text for the item">Text</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="Minimum and Maximum # of times the the itemcan appear in the instance">Cardinality</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="The type of the item">Type</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="Additional information about the item">Description &amp; Constraints</a><span style="float: right"><a href="http://hl7.org/fhir/R4/formats.html#table" title="Legend for this format"><img src="http://hl7.org/fhir/R4/help16.png" alt="doco" style="background-color: inherit"/></a></span></th></tr><tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck1.png)" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon_q_root.gif" alt="." style="background-color: white; background-color: inherit" title="QuestionnaireRoot" class="hierarchy"/> </td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"/><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Questionnaire</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">GENERATED_BY_SERVER#1.0.0</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck10.png)" id="item.0" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-coding.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Coding" class="hierarchy"/> 0</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Why did you come?</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-choice">choice</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Options: <a href="#opt-item.0">2 options</a></td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck01.png)" id="item.1" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin_end.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-group.png" alt="." style="background-color: white; background-color: inherit" title="Group" class="hierarchy"/> 1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Your health information</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">1..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-group">group</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#54126-8</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck001.png)" id="item.1.1" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin_end.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-group.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Group" class="hierarchy"/> 1.1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">null</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-group">group</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"/></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0010.png)" id="item.1.1.1" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-string.png" alt="." style="background-color: white; background-color: inherit" title="String" class="hierarchy"/> 1.1.1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Name</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-string">string</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#54125-0</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0011.png)" id="item.1.1.2" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-coding.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Coding" class="hierarchy"/> 1.1.2</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Gender</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">1..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-choice">choice</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#54131-8<br/>Value Set: http://hl7.org/fhir/us/sdc/ValueSet/LL1-9</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck00100.png)" id="item.1.1.2.1.1" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vline.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin_end.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-string.png" alt="." style="background-color: white; background-color: inherit" title="String" class="hierarchy"/> 1.1.2.1.1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Please specify</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">1..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-string">string</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"/></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0010.png)" id="item.1.1.3" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-date.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Date" class="hierarchy"/> 1.1.3</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Date of Birth</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-date">date</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#21112-8</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0010.png)" id="item.1.1.4" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-decimal.png" alt="." style="background-color: white; background-color: inherit" title="Decimal" class="hierarchy"/> 1.1.4</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Height in cm</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">1..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-decimal">decimal</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#8302-2</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0000.png)" id="item.1.1.5" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin_end.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-decimal.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Decimal" class="hierarchy"/> 1.1.5</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Weight in kg</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-decimal">decimal</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#29463-7</td></tr>\r\n<tr><td colspan="5" class="hierarchy"><br/><a href="http://hl7.org/fhir/R4/formats.html#table" title="Legend for this format"><img src="http://hl7.org/fhir/R4/help16.png" alt="doco" style="background-color: inherit"/> Documentation for this format</a></td></tr></table><hr/><p><b>Option Sets</b></p><a name="opt-item.0"> </a><p><b>Answer options for 0</b></p><ul><li style="font-size: 11px">For a scheduled (routine) visit</li><li style="font-size: 11px">For specific complaints about you</li></ul></div>',
  },
  url: "GENERATED_BY_SERVER",
  version: "1.0.0",
  title: "Example of SmaragdQuestionnaire",
  status: "active",
  date: "2023-03-08",
  publisher:
    "Bern University of Applied Sciences - Institute for Medical Informatics I4MI",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value:
            "https://www.bfh.ch/en/research/research-areas/institute-medical-informatics-i4mi/",
        },
      ],
    },
  ],
  jurisdiction: [
    {
      coding: [
        {
          system: "http://unstats.un.org/unsd/methods/m49/m49.htm",
          code: "001",
        },
      ],
    },
  ],
  item: [
    {
      extension: [
        {
          url: "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemMedia",
          valueAttachment: {
            url: "http://example.org/images/reason-for-visit.png",
          },
        },
      ],
      linkId: "0",
      text: "Why did you come?",
      type: "choice",
      answerOption: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia",
              valueAttachment: {
                url: "http://example.org/images/reason-for-visit-routine.png",
              },
            },
          ],
          valueString: "For a scheduled (routine) visit",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia",
              valueAttachment: {
                url: "http://example.org/images/reason-for-visit-specific-complaint.png",
              },
            },
          ],
          valueString: "For specific complaints about you",
        },
      ],
    },
    {
      linkId: "1",
      definition: "http://loinc.org/rdf#54126-8",
      text: "Your health information",
      type: "group",
      required: true,
      item: [
        {
          linkId: "1.1",
          type: "group",
          item: [
            {
              linkId: "1.1.1",
              definition: "http://loinc.org/rdf#54125-0",
              text: "Name",
              type: "string",
            },
            {
              linkId: "1.1.2",
              definition: "http://loinc.org/rdf#54131-8",
              text: "Gender",
              type: "choice",
              required: true,
              answerValueSet: "http://hl7.org/fhir/us/sdc/ValueSet/LL1-9",
              item: [
                {
                  linkId: "1.1.2.1.1",
                  text: "Please specify",
                  type: "string",
                  required: true,
                },
              ],
            },
            {
              linkId: "1.1.3",
              definition: "http://loinc.org/rdf#21112-8",
              text: "Date of Birth",
              type: "date",
            },
            {
              linkId: "1.1.4",
              definition: "http://loinc.org/rdf#8302-2",
              text: "Height in cm",
              type: "decimal",
              required: true,
            },
            {
              linkId: "1.1.5",
              definition: "http://loinc.org/rdf#29463-7",
              text: "Weight in kg",
              type: "decimal",
            },
          ],
        },
      ],
    },
  ],
};

export default exampleQuestionnaire;
