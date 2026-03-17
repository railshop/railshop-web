import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('c:/railshop-web/scripts/seed.mjs', 'utf8');

// Fix replacement characters that corrupted em-dashes (PowerShell encoding issue)
// U+FFFD followed by " is a corrupted em-dash
content = content.replaceAll('\uFFFD"', '\u2014');
content = content.replaceAll('\uFFFD', '\u2014');

// Fix raw (unescaped) double quotes inside p("...") and h2("...") calls.
// Strategy: for any p("...") or h2("...") line that contains internal raw ",
// replace the inner quotes with their HTML entity equivalent for the text content.
// Since these are CMS text strings, we just want the words - not the literal quote chars.
// Replace internal bare " chars (not at string boundaries) with a straight ' apostrophe.
//
// We'll do a targeted line-by-line pass:
const lines = content.split('\n');
const fixed = lines.map((line) => {
  // Only process lines containing p(" or h2(" calls
  if (!line.match(/^\s+(?:p|h2)\("/)) return line;

  // Find the opening p(" or h2(" and closing ")
  const fnMatch = line.match(/^(\s+(?:p|h2)\()"(.+)"(\),?)$/);
  if (!fnMatch) return line;

  const [, prefix, inner, suffix] = fnMatch;
  // Replace any remaining raw double quotes inside with a Unicode left/right quote word
  // (just replace with empty-looking alternative since these are quoted phrases inside text)
  const cleanInner = inner.replaceAll('"', "'");
  return `${prefix}"${cleanInner}"${suffix}`;
});

const result = fixed.join('\n');
writeFileSync('c:/railshop-web/scripts/seed.mjs', result, 'utf8');
console.log('Fixed. Lines processed: ' + lines.length);
