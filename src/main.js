import { convertDocxToQtiHtml, parseHtmlToQuestions } from './converter.js';
import { generateQTIPackage } from './qti-generator.js';

let currentFile = null;
let parsedQuestions = [];

// DOM Elements
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileNameDisplay = document.getElementById('fileName');
const removeFileBtn = document.getElementById('removeFile');
const previewSection = document.getElementById('previewSection');
const instructionsSection = document.getElementById('instructionsSection');
const previewContainer = document.getElementById('previewContainer');
const questionCountDisplay = document.getElementById('questionCount');
const exportBtn = document.getElementById('exportBtn');
const debugSection = document.getElementById('debugSection');
const debugHtml = document.getElementById('debugHtml');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Event Listeners for Drag and Drop
dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    
    if (e.dataTransfer.files.length > 0) {
        handleFileSelect(e.dataTransfer.files[0]);
    }
});

dropzone.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
    }
});

removeFileBtn.addEventListener('click', () => {
    resetState();
});

exportBtn.addEventListener('click', handleExport);

function handleFileSelect(file) {
    if (file.name.toLowerCase().endsWith('.docx')) {
        currentFile = file;
        fileNameDisplay.textContent = file.name;
        dropzone.classList.add('hidden');
        instructionsSection.classList.add('hidden');
        fileInfo.classList.remove('hidden');
        previewSection.classList.add('hidden');
        parsedQuestions = [];
        
        // Automatically parse the document upon selection
        processDocument();
    } else {
        showToast("Please upload a .docx file.", "error");
    }
}

function resetState() {
    currentFile = null;
    parsedQuestions = [];
    fileInput.value = '';
    dropzone.classList.remove('hidden');
    instructionsSection.classList.remove('hidden');
    fileInfo.classList.add('hidden');
    previewSection.classList.add('hidden');
}

function processDocument() {
    if (!currentFile) return;

    showToast("Parsing document...", "success");

    const reader = new FileReader();
    
    reader.onload = async function(event) {
        try {
            const arrayBuffer = event.target.result;
            
            // 1. Convert DOCX to HTML using Mammoth
            const { html, mathMap } = await convertDocxToQtiHtml(arrayBuffer);
            
            // 2. Parse the HTML into structured questions
            parsedQuestions = parseHtmlToQuestions(html);
            
            // 3. Restore MathML strings into the parsed questions
            parsedQuestions.forEach(q => {
                mathMap.forEach((mathmlString, mathId) => {
                    q.text = q.text.replace(mathId, mathmlString);
                    q.options.forEach(opt => {
                        opt.text = opt.text.replace(mathId, mathmlString);
                    });
                });
            });
            
            // 4. Render Preview (and pass html for debugging)
            renderPreview(parsedQuestions, html);
            
            showToast("Document parsed successfully!");
        } catch (error) {
            console.error(error);
            showToast("Error processing document. Check console for details.", "error");
        }
    };
    
    reader.readAsArrayBuffer(currentFile);
}

function renderPreview(questions, rawHtml) {
    previewContainer.innerHTML = '';
    
    // Always populate debug section
    debugSection.classList.remove('hidden');
    debugHtml.value = rawHtml || "No HTML generated.";
    
    if (questions.length === 0) {
        previewContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No questions could be identified. Please ensure your document follows the expected formatting.</p>';
        exportBtn.disabled = true;
        questionCountDisplay.textContent = '0';
        previewSection.classList.remove('hidden');
        return;
    }

    questionCountDisplay.textContent = questions.length;
    exportBtn.disabled = false;

    questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        
        // Add Question Text Container
        const qTextContainer = document.createElement('div');
        qTextContainer.className = 'question-header-container';
        
        const qText = document.createElement('div');
        qText.className = 'question-text';
        
        const qLabel = document.createElement('strong');
        qLabel.textContent = `Q${idx + 1}: `;
        
        const qContent = document.createElement('span');
        qContent.innerHTML = q.text;
        qContent.contentEditable = true;
        qContent.className = 'editable-text';
        qContent.addEventListener('input', () => {
            q.text = qContent.innerHTML;
        });

        qText.appendChild(qLabel);
        qText.appendChild(qContent);
        qTextContainer.appendChild(qText);
        
        // Validation: Missing correct answer
        const hasCorrect = q.options.some(o => o.isCorrect);
        const warningBadge = document.createElement('span');
        warningBadge.className = 'badge warning hidden';
        warningBadge.textContent = 'Missing Correct Answer';
        qTextContainer.appendChild(warningBadge);
        
        if (!hasCorrect) {
            warningBadge.classList.remove('hidden');
        }

        card.appendChild(qTextContainer);
        
        // Add Options
        const optionsList = document.createElement('ul');
        optionsList.className = 'options-list';
        
        q.options.forEach((opt, optIdx) => {
            const optItem = document.createElement('li');
            optItem.className = `option-item ${opt.isCorrect ? 'correct' : ''}`;
            
            // Radio button wrapper for custom styling
            const radioWrapper = document.createElement('label');
            radioWrapper.className = 'radio-wrapper';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q_${idx}_correct`;
            radio.checked = opt.isCorrect;
            
            const radioCustom = document.createElement('span');
            radioCustom.className = 'radio-custom';
            
            radioWrapper.appendChild(radio);
            radioWrapper.appendChild(radioCustom);
            
            radio.addEventListener('change', () => {
                // Clear all corrects for this question
                q.options.forEach(o => o.isCorrect = false);
                opt.isCorrect = true;
                
                // Update UI classes
                Array.from(optionsList.children).forEach(li => li.classList.remove('correct'));
                optItem.classList.add('correct');
                
                // Hide warning badge
                warningBadge.classList.add('hidden');
            });
            
            const textContent = document.createElement('div');
            textContent.className = 'option-content editable-text';
            textContent.contentEditable = true;
            textContent.innerHTML = opt.text;
            textContent.addEventListener('input', () => {
                opt.text = textContent.innerHTML;
            });

            optItem.appendChild(radioWrapper);
            optItem.appendChild(textContent);
            optionsList.appendChild(optItem);
        });
        
        card.appendChild(optionsList);
        previewContainer.appendChild(card);
    });
    
    previewSection.classList.remove('hidden');

    // Tell MathJax to typeset the newly added MathML elements
    if (window.MathJax) {
        window.MathJax.typesetPromise([previewContainer]).catch((err) => console.log('MathJax error:', err));
    }
}

function handleExport() {
    if (parsedQuestions.length > 0 && currentFile) {
        generateQTIPackage(parsedQuestions, currentFile.name);
        showToast("QTI Package generated successfully!");
    }
}

function showToast(message, type = "success") {
    toastMessage.textContent = message;
    
    if (type === "error") {
        toast.classList.add('error');
    } else {
        toast.classList.remove('error');
    }
    
    toast.classList.remove('hidden');
    // Force reflow
    void toast.offsetWidth;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 3000);
}
