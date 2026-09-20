import JSZip from 'https://esm.sh/jszip@3.10.1';
import fileSaver from 'https://esm.sh/file-saver@2.0.5';
const { saveAs } = fileSaver;
import { sanitizeHtml } from './sanitize-html.js';
import { generateAssessmentTest, generateManifest } from './qti-xml.js';

/**
 * Generates a QTI 1.2 compatible zip package specifically designed for Canvas LMS.
 * @param {Array} questions - Array of question objects parsed from the DOCX.
 * @param {String} filename - The original filename.
 */
export async function generateQTIPackage(questions, filename) {
    const zip = new JSZip();
    const manifestId = `i${Math.random().toString(36).substr(2, 9)}`;
    const quizId = `q_${Math.random().toString(36).substr(2, 9)}`;

    // Add necessary XSD schemas directly to the zip
    const imscpReq = await fetch('./src/xsd/imscp_v1p1.xsd');
    const imscpXsd = await imscpReq.text();
    zip.file("imscp_v1p1.xsd", imscpXsd);

    const imsmdReq = await fetch('./src/xsd/imsmd_v1p2p2.xsd');
    const imsmdXsd = await imsmdReq.text();
    zip.file("imsmd_v1p2p2.xsd", imsmdXsd);

    const qtiasiReq = await fetch('./src/xsd/ims_qtiasiv1p2p1.xsd');
    const qtiasiXsd = await qtiasiReq.text();
    zip.file("ims_qtiasiv1p2p1.xsd", qtiasiXsd);
    
    const title = filename.replace(/\.docx$/i, '') || 'Imported Quiz';
    const exportQuestions = questions.map(question => ({
        ...question,
        text: sanitizeHtml(question.text),
        options: question.options.map(option => ({
            ...option,
            text: sanitizeHtml(option.text)
        }))
    }));

    const images = [];
    let imageCounter = 0;
    const base64Regex = /src=(["'])data:(image\/[^;]+);base64,([^"']+)\1/gi;

    // Scan for inline images and extract them as physical files
    exportQuestions.forEach(q => {
        q.text = q.text.replace(base64Regex, (match, quote, mimeType, base64Data) => {
            const ext = mimeType.split('/')[1] || 'png';
            const imgFilename = `image_${imageCounter++}.${ext}`;
            images.push({ filename: imgFilename, base64: base64Data });
            return `src="images/${imgFilename}"`;
        });
        
        q.options.forEach(opt => {
            opt.text = opt.text.replace(base64Regex, (match, quote, mimeType, base64Data) => {
                const ext = mimeType.split('/')[1] || 'png';
                const imgFilename = `image_${imageCounter++}.${ext}`;
                images.push({ filename: imgFilename, base64: base64Data });
                return `src="images/${imgFilename}"`;
            });
        });
    });

    validateQuestions(exportQuestions);

    // 1. Generate the combined Assessment XML containing all items
    const testXml = generateAssessmentTest(quizId, title, exportQuestions);
    
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
    saveAs(content, `${title.replace(/[^\w.-]+/g, '_')}_QTI_1.2.zip`);
}

function validateQuestions(questions) {
    questions.forEach((question, index) => {
        const correctAnswers = question.options.filter(option => option.isCorrect);
        if (question.options.length < 2) {
            throw new Error(`Question ${index + 1} must have at least two options.`);
        }
        if (correctAnswers.length !== 1) {
            throw new Error(`Question ${index + 1} must have exactly one correct answer.`);
        }
    });
}
