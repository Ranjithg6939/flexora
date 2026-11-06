const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('background-color: var(--surface)')) {
    console.log(`${f} has inline var(--surface)`);
  }
});
