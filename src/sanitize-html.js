import DOMPurify from 'https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.es.mjs';

const sanitizeConfig = {
    USE_PROFILES: { html: true, mathMl: true },
    ADD_ATTR: ['xmlns']
};

export function sanitizeHtml(html) {
    return DOMPurify.sanitize(html, sanitizeConfig);
}
