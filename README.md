# QTI-Former

QTI-Former is a completely client-side browser tool that converts standard Word Documents (.docx) into Canvas LMS compatible QTI 1.2 zip packages.

## Features
- **100% Client-Side**: All parsing and packaging happens securely in your browser. No server required.
- **Canvas Native**: Outputs perfectly structured QTI 1.2 packages natively compatible with Canvas LMS.
- **Rich Text & Images**: Automatically extracts base64 inline images and rich text formatting (bold, italics, nested lists) from your Word document.
- **OMML Math Support**: Uses an XSLT transformation pipeline to convert Microsoft Word Equations (OMML) into standard MathML.
- **Interactive Editing**: Review and edit parsed questions directly in the browser UI before generating the ZIP package.

## Development

Built using Vanilla JS and Vite.

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
