/**
 * Technology Icon Utility
 * Uses Devicon CDN for high-quality, colorful technology brand icons.
 * Fallback to a styled initial letter for unknown technologies.
 */

// Map technology names to their Devicon slug and preferred variant
const ICON_MAP: Record<string, { slug: string; variant?: string; color?: string }> = {
  // Frontend
  'react': { slug: 'react', variant: 'original', color: '#61DAFB' },
  'next.js': { slug: 'nextjs', variant: 'original', color: '#000000' },
  'nextjs': { slug: 'nextjs', variant: 'original', color: '#000000' },
  'typescript': { slug: 'typescript', variant: 'original', color: '#3178C6' },
  'javascript': { slug: 'javascript', variant: 'original', color: '#F7DF1E' },
  'tailwind css': { slug: 'tailwindcss', variant: 'original', color: '#06B6D4' },
  'tailwindcss': { slug: 'tailwindcss', variant: 'original', color: '#06B6D4' },
  'framer motion': { slug: 'framermotion', variant: 'original', color: '#0055FF' },
  'html5 / css3': { slug: 'html5', variant: 'original', color: '#E34F26' },
  'html5': { slug: 'html5', variant: 'original', color: '#E34F26' },
  'css3': { slug: 'css3', variant: 'original', color: '#1572B6' },
  'sass': { slug: 'sass', variant: 'original', color: '#CC6699' },
  'redux': { slug: 'redux', variant: 'original', color: '#764ABC' },
  'vue': { slug: 'vuejs', variant: 'original', color: '#4FC08D' },
  'svelte': { slug: 'svelte', variant: 'original', color: '#FF3E00' },
  'angular': { slug: 'angularjs', variant: 'original', color: '#DD0031' },

  // Backend
  'node.js': { slug: 'nodejs', variant: 'original', color: '#339933' },
  'nodejs': { slug: 'nodejs', variant: 'original', color: '#339933' },
  'express': { slug: 'express', variant: 'original', color: '#000000' },
  'python': { slug: 'python', variant: 'original', color: '#3776AB' },
  'django': { slug: 'django', variant: 'plain', color: '#092E20' },
  'flask': { slug: 'flask', variant: 'original', color: '#000000' },
  'fastapi': { slug: 'fastapi', variant: 'original', color: '#009688' },
  'graphql': { slug: 'graphql', variant: 'plain', color: '#E10098' },
  'java': { slug: 'java', variant: 'original', color: '#007396' },
  'go': { slug: 'go', variant: 'original-wordmark', color: '#00ADD8' },
  'rust': { slug: 'rust', variant: 'original', color: '#000000' },
  'c': { slug: 'c', variant: 'original', color: '#A8B9CC' },
  'c++': { slug: 'cplusplus', variant: 'original', color: '#00599C' },

  // Databases
  'postgresql': { slug: 'postgresql', variant: 'original', color: '#4169E1' },
  'mongodb': { slug: 'mongodb', variant: 'original', color: '#47A248' },
  'mysql': { slug: 'mysql', variant: 'original', color: '#4479A1' },
  'redis': { slug: 'redis', variant: 'original', color: '#DC382D' },
  'firebase': { slug: 'firebase', variant: 'plain', color: '#FFCA28' },
  'supabase': { slug: 'supabase', variant: 'original', color: '#3FCF8E' },
  'prisma': { slug: 'prisma', variant: 'original', color: '#2D3748' },

  // Cloud & DevOps
  'docker': { slug: 'docker', variant: 'original', color: '#2496ED' },
  'kubernetes': { slug: 'kubernetes', variant: 'original', color: '#326CE5' },
  'aws': { slug: 'amazonwebservices', variant: 'plain-wordmark', color: '#FF9900' },
  'gcp': { slug: 'googlecloud', variant: 'original', color: '#4285F4' },
  'azure': { slug: 'azure', variant: 'original', color: '#0078D4' },
  'vercel': { slug: 'vercel', variant: 'original', color: '#000000' },
  'netlify': { slug: 'netlify', variant: 'original', color: '#00C7B7' },
  'nginx': { slug: 'nginx', variant: 'original', color: '#009639' },
  'linux': { slug: 'linux', variant: 'original', color: '#FCC624' },
  'bash': { slug: 'bash', variant: 'original', color: '#4EAA25' },

  // Tools
  'git': { slug: 'git', variant: 'original', color: '#F05032' },
  'github': { slug: 'github', variant: 'original', color: '#181717' },
  'vscode': { slug: 'vscode', variant: 'original', color: '#007ACC' },
  'figma': { slug: 'figma', variant: 'original', color: '#F24E1E' },
  'postman': { slug: 'postman', variant: 'original', color: '#FF6C37' },
  'jest': { slug: 'jest', variant: 'plain', color: '#C21325' },
  'webpack': { slug: 'webpack', variant: 'original', color: '#8DD6F9' },
  'vite': { slug: 'vitejs', variant: 'original', color: '#646CFF' },
  'npm': { slug: 'npm', variant: 'original-wordmark', color: '#CB3837' },

  // Blockchain & AI
  'solidity': { slug: 'solidity', variant: 'original', color: '#363636' },
  'ethereum': { slug: 'ethereum', variant: 'original', color: '#3C3C3D' },  
  'tensorflow': { slug: 'tensorflow', variant: 'original', color: '#FF6F00' },
  'pytorch': { slug: 'pytorch', variant: 'original', color: '#EE4C2C' },

  // Security
  'wireshark': { slug: 'wireshark', variant: 'original', color: '#1679A7' },
  'kali linux': { slug: 'linux', variant: 'original', color: '#557C94' },
};

/**
 * Get the Devicon CDN URL for a technology
 */
export function getTechIconUrl(name: string, size: number = 48): string {
  const key = name.toLowerCase().trim();
  const entry = ICON_MAP[key];
  
  if (entry) {
    const variant = entry.variant || 'original';
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${entry.slug}/${entry.slug}-${variant}.svg`;
  }
  
  return '';
}

/**
 * Get the brand color for a technology
 */
export function getTechColor(name: string): string {
  const key = name.toLowerCase().trim();
  return ICON_MAP[key]?.color || '#64748b';
}

/**
 * Check if a technology has an icon available
 */
export function hasTechIcon(name: string): boolean {
  return name.toLowerCase().trim() in ICON_MAP;
}

/**
 * Get the first letter(s) for fallback icons
 */
export function getTechInitials(name: string): string {
  if (name.includes('/')) return name.split('/').map(s => s.trim()[0]).join('');
  if (name.includes('.')) return name.split('.')[0][0].toUpperCase();
  return name.slice(0, 2).toUpperCase();
}
