import DOMPurify from 'https://esm.sh/dompurify@3.0.5';

const sanitizeConfig = {
    USE_PROFILES: { html: true, mathMl: true },
    ADD_ATTR: ['xmlns']
};

export function sanitizeHtml(html) {
    return DOMPurify.sanitize(html, sanitizeConfig);
}
