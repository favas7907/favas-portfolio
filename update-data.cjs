const fs = require('fs');
let code = fs.readFileSync('src/constants/data.ts', 'utf8');

code = code.replace(
  "tagline: 'Building scalable, secure, and intelligent digital solutions.',",
  "tagline: 'Engineering robust full-stack applications with a focus on scalable architectures, AI integration, and secure systems.',"
);

code = code.replace(
  "role: 'B.Tech Computer Science Student | Full Stack Developer | AI • Blockchain • Cybersecurity Enthusiast',",
  "role: 'Software Engineer specializing in scalable full-stack applications and secure system design.',"
);

fs.writeFileSync('src/constants/data.ts', code);
