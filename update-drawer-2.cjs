const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const oldDrawerContent = `
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

const newDrawerContent = `
              <div className="flex flex-col h-full overflow-y-auto px-8 pb-12">
                <nav className="flex flex-col gap-2" aria-label="Mobile Main Navigation">`;

code = code.replace(oldDrawerContent, newDrawerContent);
code = code.replace(/className="fixed top-0 right-0 bottom-0 w-\[85vw\] max-w-\[400px\] bg-white z-\[50\] shadow-2xl flex flex-col lg:hidden border-l border-slate-100 "/, 'className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[400px] bg-white z-[50] shadow-2xl flex flex-col lg:hidden border-l border-slate-100 pt-24"');

// Focus trap logic fix
const oldFocusTrap = `
    const focusableElements = drawerRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;`;

const newFocusTrap = `
    const drawerElements = Array.from(drawerRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )) as HTMLElement[];
    
    const headerToggle = document.getElementById('mobile-menu-toggle');
    const focusableElements = headerToggle ? [headerToggle, ...drawerElements] : drawerElements;
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];`;

code = code.replace(oldFocusTrap, newFocusTrap);

// Add id to mobile menu toggle
code = code.replace(/<button \n              className="lg:hidden relative z-50 p-2/, '<button \n              id="mobile-menu-toggle"\n              className="lg:hidden relative z-50 p-2');

fs.writeFileSync('src/components/Navbar.tsx', code);
