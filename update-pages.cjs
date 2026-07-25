const fs = require('fs');

const pages = [
  'src/pages/AboutPage.tsx',
  'src/pages/SkillsPage.tsx',
  'src/pages/AchievementsPage.tsx',
  'src/pages/ProjectsPage.tsx',
  'src/pages/ContactPage.tsx'
];

for (const page of pages) {
  let code = fs.readFileSync(page, 'utf8');
  code = code.replace(/import \{ motion \} from 'motion\/react';\n?/, '');
  code = code.replace(/<motion\.div[^>]*>/, '<>');
  code = code.replace(/<\/motion\.div>/, '</>');
  fs.writeFileSync(page, code);
}
