import { execSync } from 'node:child_process';

console.log('Building dist...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Generating git tree for dist folder...');
const treeHash = execSync('git write-tree --prefix=dist').toString().trim();
console.log('Tree hash:', treeHash);

const commitHash = execSync(`git commit-tree ${treeHash} -m "deploy: update production branch with perfected agent readiness endpoints and headers"`).toString().trim();
console.log('Created commit:', commitHash);

console.log('Pushing to origin/production...');
execSync(`git push origin ${commitHash}:refs/heads/production --force`, { stdio: 'inherit' });
console.log('Successfully updated origin/production!');
