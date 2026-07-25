const fs = require('fs');

let typesData = fs.readFileSync('src/types.ts', 'utf8');
typesData = typesData.replace('impact?: string;', `impact?: string;
  imageUrl?: string;
  imageAlt?: string;`);
fs.writeFileSync('src/types.ts', typesData);

let data = fs.readFileSync('src/constants/data.ts', 'utf8');

// We will just add an example image to one of the milestones. Let's say EcoTrack Architecture Design.
data = data.replace(
  /impact: 'Restored tooltips and hover interactions without sacrificing the rendering speed of the Canvas API\.' },/,
  `impact: 'Restored tooltips and hover interactions without sacrificing the rendering speed of the Canvas API.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', imageAlt: 'Canvas interaction rendering visualization' },`
);

fs.writeFileSync('src/constants/data.ts', data);
