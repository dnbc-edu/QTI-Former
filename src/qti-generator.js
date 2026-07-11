import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import imscpXsd from './xsd/imscp_v1p1.xsd?raw';
import imsmdXsd from './xsd/imsmd_v1p2p2.xsd?raw';
import qtiasiXsd from './xsd/ims_qtiasiv1p2p1.xsd?raw';

/**
 * Generates a QTI 1.2 compatible zip package specifically designed for Canvas LMS.
 * @param {Array} questions - Array of question objects parsed from the DOCX.
 * @param {String} filename - The original filename.
 */
export async function generateQTIPackage(questions, filename) {
    const zip = new JSZip();
    
    const quizId = 'quiz_' + Math.random().toString(36).substr(2, 9);
    const title = filename.replace('.docx', '') || 'Imported Quiz';

    const images = [];
    let imageCounter = 0;
    const base64Regex = /src="data:(image\/[^;]+);base64,([^"]+)"/g;

    // Scan for inline images and extract them as physical files
    questions.forEach(q => {
        q.text = q.text.replace(base64Regex, (match, mimeType, base64Data) => {
            const ext = mimeType.split('/')[1] || 'png';
            const imgFilename = `image_${imageCounter++}.${ext}`;
            images.push({ filename: imgFilename, base64: base64Data });
            return `src="images/${imgFilename}"`;
        });
        
        q.options.forEach(opt => {
            opt.text = opt.text.replace(base64Regex, (match, mimeType, base64Data) => {
                const ext = mimeType.split('/')[1] || 'png';
                const imgFilename = `image_${imageCounter++}.${ext}`;
                images.push({ filename: imgFilename, base64: base64Data });
                return `src="images/${imgFilename}"`;
            });
        });
    });

    // 1. Generate the combined Assessment XML containing all items
    const testXml = generateAssessmentTest(quizId, title, questions);
    
    // Canvas typically places the assessment inside a folder with the same name as its identifier
    const quizFolder = zip.folder(quizId);
    quizFolder.file(`${quizId}.xml`, testXml);
    
    // Write images to folder
    if (images.length > 0) {
        const imagesFolder = quizFolder.folder('images');
        images.forEach(img => {
            imagesFolder.file(img.filename, img.base64, { base64: true });
        });
    }

    // 2. Generate imsmanifest.xml
    const manifestXml = generateManifest(quizId, title, images);
    zip.file('imsmanifest.xml', manifestXml);

    // 3. Create XSD_Files folder and populate with schemas
    const xsdFolder = zip.folder('XSD_Files');
    xsdFolder.file('imscp_v1p1.xsd', imscpXsd);
    xsdFolder.file('imsmd_v1p2p2.xsd', imsmdXsd);
    xsdFolder.file('ims_qtiasiv1p2p1.xsd', qtiasiXsd);

    // Generate the zip file
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `${title.replace(/\s+/g, '_')}_QTI_1.2.zip`);
}

function generateManifest(quizId, title, images = []) {
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
                    <imsmd:langstring xml:lang="en-US">${title}</imsmd:langstring>
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

function generateAssessmentTest(quizId, title, questions) {
    let itemsXml = '';
    
    questions.forEach((q, index) => {
        itemsXml += generateAssessmentItem(q, index);
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2" 
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                 xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
    <assessment ident="${quizId}" title="${title}">
        <section ident="root_section">
${itemsXml}
        </section>
    </assessment>
</questestinterop>`;
}

function generateAssessmentItem(question, index) {
    const itemId = `item_${index + 1}`;
    
    // Find correct choice index
    let correctChoiceIdentifier = 'choice_0';
    let choicesXml = '';
    
    question.options.forEach((opt, optIndex) => {
        const choiceId = `choice_${optIndex}`;
        if (opt.isCorrect) {
            correctChoiceIdentifier = choiceId;
        }
        
        choicesXml += `
                        <response_label ident="${choiceId}">
                            <material>
                                <mattext texttype="text/html"><![CDATA[${opt.text}]]></mattext>
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
                        <mattext texttype="text/html"><![CDATA[${question.text}]]></mattext>
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
