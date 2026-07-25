const fs = require('fs');
let code = fs.readFileSync('src/constants/data.ts', 'utf8');

code = code.replace(
  "role: 'Software Engineer specializing in scalable full-stack applications and secure system design.',",
  "role: 'Architecting digital perfection.',"
);

fs.writeFileSync('src/constants/data.ts', code);
