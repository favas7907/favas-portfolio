const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const regex = /className=\{\`fixed top-0 left-0 w-full z-\[60\] transition-all duration-500 \$\{[\s\S]*?\}\`\}/m;

code = code.replace(
  regex,
  "className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${scrolled || isOpen ? 'bg-white/70 backdrop-blur-2xl saturate-150 border-b border-slate-200/50 py-3 md:py-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]' : 'bg-transparent py-5 md:py-6 border-b border-transparent'}`}"
);

code = code.replace(
  /<div className="container-custom flex justify-between items-center h-10">/g,
  '<div className="container-custom flex justify-between items-center min-h-[3.5rem]">'
);

fs.writeFileSync('src/components/Navbar.tsx', code);
