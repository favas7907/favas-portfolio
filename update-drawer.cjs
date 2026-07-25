const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const drawerContent = `
              <div className="flex flex-col h-full overflow-y-auto px-8 pb-12 pt-8">
                <div className="flex justify-end mb-8">
                  <button 
                    className="p-2 text-slate-400 hover:text-black hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex flex-col gap-2" aria-label="Mobile Main Navigation">`;

code = code.replace(/<div className="flex flex-col h-full overflow-y-auto px-8 pb-12">[\s\S]*?<nav className="flex flex-col gap-2" aria-label="Mobile Main Navigation">/, drawerContent);

// we can remove the pt-24 from the drawer container since we added pt-8 inside and the close button
code = code.replace(/pt-24"/, '"');

fs.writeFileSync('src/components/Navbar.tsx', code);
