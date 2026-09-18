import DOMPurify from 'dompurify';

const sanitizeConfig = {
    USE_PROFILES: { html: true, mathMl: true },
    ADD_ATTR: ['xmlns']
};

export function sanitizeHtml(html) {
    return DOMPurify.sanitize(html, sanitizeConfig);
}
