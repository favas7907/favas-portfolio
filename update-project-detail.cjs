const fs = require('fs');
let code = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

code = code.replace(/<motion\.div\s+initial=\{\{ opacity: 0, y: 20 \}\}\s+animate=\{\{ opacity: 1, y: 0 \}\}\s+exit=\{\{ opacity: 0 \}\}\s+transition=\{\{ duration: 0\.5 \}\}\s+className="w-full pb-20 bg-white"\s+>/, '<div className="w-full pb-20 bg-white">');
code = code.replace(/<\/motion\.div>/g, '</div>');
fs.writeFileSync('src/pages/ProjectDetail.tsx', code);
