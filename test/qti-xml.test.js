import test from 'node:test';
import assert from 'node:assert/strict';
import { generateAssessmentTest, generateManifest } from '../src/qti-xml.js';

test('escapes XML metadata and preserves CDATA terminators', () => {
    const xml = generateAssessmentTest('quiz_1', 'Quiz "A" & B', [{
        text: 'Prompt ]]> continued',
        options: [
            { text: 'One', isCorrect: false },
            { text: 'Two ]]> continued', isCorrect: true }
        ]
    }]);

    assert.match(xml, /title="Quiz &quot;A&quot; &amp; B"/);
    assert.match(xml, /Prompt \]\]\]\]><!\[CDATA\[> continued/);
    assert.match(xml, /Two \]\]\]\]><!\[CDATA\[> continued/);
    assert.match(xml, /<varequal respident="response1">choice_1<\/varequal>/);
});

test('escapes manifest titles', () => {
    const manifest = generateManifest('quiz_1', 'A < B & C', []);

    assert.match(manifest, /A &lt; B &amp; C/);
});
