import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const files = [
  'dist/.well-known/api-catalog.json',
  'dist/.well-known/api-catalog',
  'dist/.well-known/ai-catalog.json',
  'dist/.well-known/mcp/server-card.json',
  'dist/.well-known/agent-skills/index.json',
  'dist/.well-known/agent-skills/project-estimator/SKILL.md',
  'dist/.well-known/agent-skills/ai-architecture-audit/SKILL.md',
  'dist/.well-known/agent-skills/consultation-booking/SKILL.md',
  'dist/.well-known/openid-configuration',
  'dist/.well-known/oauth-authorization-server',
  'dist/.well-known/oauth-protected-resource',
  'dist/auth.md',
  'dist/robots.txt',
  'dist/index.md',
  'dist/about.md',
  'dist/api/openapi.json'
];

let allPassed = true;
console.log('--- Checking File Existence in dist/ ---');
for (const f of files) {
  const exists = fs.existsSync(path.resolve(process.cwd(), f));
  console.log(`${exists ? '✓' : '✗'} ${f}`);
  if (!exists) allPassed = false;
}

console.log('\n--- Checking JSON Validation ---');
const jsonFiles = [
  'dist/.well-known/api-catalog.json',
  'dist/.well-known/ai-catalog.json',
  'dist/.well-known/mcp/server-card.json',
  'dist/.well-known/agent-skills/index.json',
  'dist/.well-known/openid-configuration',
  'dist/.well-known/oauth-authorization-server',
  'dist/.well-known/oauth-protected-resource',
  'dist/api/openapi.json'
];

for (const j of jsonFiles) {
  try {
    const fullPath = path.resolve(process.cwd(), j);
    JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
    console.log(`✓ Valid JSON: ${j}`);
  } catch (err: any) {
    console.error(`✗ Invalid JSON: ${j}`, err.message);
    allPassed = false;
  }
}

console.log('\n--- Checking Agent Skills Checksums ---');
const skillsIndexPath = path.resolve(process.cwd(), 'dist/.well-known/agent-skills/index.json');
const skillsIndex = JSON.parse(fs.readFileSync(skillsIndexPath, 'utf-8'));
for (const skill of skillsIndex.skills) {
  const relPath = skill.url.replace('https://fiversesystems.com/', 'dist/');
  const fullPath = path.resolve(process.cwd(), relPath);
  const content = fs.readFileSync(fullPath);
  const hash = crypto.createHash('sha256').update(content).digest('hex');
  if (hash === skill.sha256) {
    console.log(`✓ Checksum matches for ${skill.name} (${hash.slice(0, 16)}...)`);
  } else {
    console.error(`✗ Checksum mismatch for ${skill.name}: expected ${skill.sha256}, got ${hash}`);
    allPassed = false;
  }
}

console.log('\n--- Checking robots.txt Content-Signal ---');
const robotsPath = path.resolve(process.cwd(), 'dist/robots.txt');
const robots = fs.readFileSync(robotsPath, 'utf-8');
if (robots.includes('Content-Signal:')) {
  console.log('✓ robots.txt contains Content-Signal directive');
} else {
  console.error('✗ robots.txt missing Content-Signal');
  allPassed = false;
}

console.log('\n--- Checking index.html Agent Link Relations ---');
const indexHtmlPath = path.resolve(process.cwd(), 'dist/index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
const requiredRelations = [
  'api-catalog',
  'ai-catalog',
  'mcp-server-card',
  'agent-skills',
  'auth-metadata',
  'llms-txt'
];

for (const rel of requiredRelations) {
  if (indexHtml.includes(`rel="${rel}"`)) {
    console.log(`✓ index.html contains rel="${rel}"`);
  } else {
    console.error(`✗ index.html missing rel="${rel}"`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n🌟 ALL 12 AGENT-READINESS CRITERIA VERIFIED SUCCESSFULLY!');
} else {
  process.exit(1);
}
