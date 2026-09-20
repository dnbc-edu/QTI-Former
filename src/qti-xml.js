function escapeXml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function toCdata(value) {
    return String(value).replace(/]]>/g, ']]]]><![CDATA[>');
}

export function generateManifest(quizId, title, images = []) {
    let filesXml = `<file href="${quizId}/${quizId}.xml"/>\n`;
    images.forEach(img => {
        filesXml += `            <file href="${quizId}/images/${img.filename}"/>\n`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<manifest xmlns="http://www.imsglobal.org/xsd/imscp_v1p1" 
          xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2" 
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          identifier="manifest_${quizId}"
          xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1 http://www.imsglobal.org/xsd/imscp_v1p1.xsd 
                              http://www.imsglobal.org/xsd/imsmd_v1p2 http://www.imsglobal.org/xsd/imsmd_v1p2p2.xsd">
    <metadata>
        <schema>IMS Content</schema>
        <schemaversion>1.1.3</schemaversion>
        <imsmd:lom>
            <imsmd:general>
                <imsmd:title>
                    <imsmd:langstring xml:lang="en-US">${escapeXml(title)}</imsmd:langstring>
                </imsmd:title>
            </imsmd:general>
        </imsmd:lom>
    </metadata>
    <organizations/>
    <resources>
        <resource identifier="${quizId}" type="imsqti_xmlv1p2" href="${quizId}/${quizId}.xml">
            ${filesXml.trim()}
        </resource>
    </resources>
</manifest>`;
}

export function generateAssessmentTest(quizId, title, questions) {
    const itemsXml = questions.map(generateAssessmentItem).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2" 
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                 xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
    <assessment ident="${escapeXml(quizId)}" title="${escapeXml(title)}">
        <section ident="root_section">
${itemsXml}
        </section>
    </assessment>
</questestinterop>`;
}

export function generateAssessmentItem(question, index) {
    const itemId = `item_${index + 1}`;
    let correctChoiceIdentifier = 'choice_0';
    let choicesXml = '';

    question.options.forEach((option, optionIndex) => {
        const choiceId = `choice_${optionIndex}`;
        if (option.isCorrect) correctChoiceIdentifier = choiceId;

        choicesXml += `
                        <response_label ident="${choiceId}">
                            <material>
                                <mattext texttype="text/html"><![CDATA[${toCdata(option.text)}]]></mattext>
                            </material>
                        </response_label>`;
    });

    return `
            <item ident="${itemId}" title="Question ${index + 1}">
                <itemmetadata>
                    <qtimetadata>
                        <qtimetadatafield>
                            <fieldlabel>question_type</fieldlabel>
                            <fieldentry>multiple_choice_question</fieldentry>
                        </qtimetadatafield>
                    </qtimetadata>
                </itemmetadata>
                <presentation>
                    <material>
                        <mattext texttype="text/html"><![CDATA[${toCdata(question.text)}]]></mattext>
                    </material>
                    <response_lid ident="response1" rcardinality="Single">
                        <render_choice>
${choicesXml}
                        </render_choice>
                    </response_lid>
                </presentation>
                <resprocessing>
                    <outcomes>
                        <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
                    </outcomes>
                    <respcondition continue="No">
                        <conditionvar>
                            <varequal respident="response1">${correctChoiceIdentifier}</varequal>
                        </conditionvar>
                        <setvar action="Set" varname="SCORE">100</setvar>
                    </respcondition>
                </resprocessing>
            </item>`;
}
