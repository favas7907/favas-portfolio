const fs = require('fs');
let code = fs.readFileSync('src/components/Projects.tsx', 'utf8');

const descBlock = `<p className={\`text-text-secondary font-medium leading-relaxed mb-6 flex-grow \${project.featured && !previewOnly ? 'text-lg max-w-lg' : 'text-base line-clamp-4'}\`}>
                  {project.description}
                </p>`;

const newDescBlock = `<div className="flex-grow mb-6">
                  {project.description.includes('Problem:') ? (
                    <div className="space-y-4">
                      <div>
                        <strong className="text-black text-xs uppercase tracking-widest block mb-1">Problem</strong>
                        <p className="text-text-secondary text-sm md:text-base">{project.description.split('Solution:')[0].replace('Problem:', '').trim()}</p>
                      </div>
                      <div>
                        <strong className="text-primary text-xs uppercase tracking-widest block mb-1">Solution</strong>
                        <p className="text-text-secondary text-sm md:text-base">{project.description.split('Solution:')[1].trim()}</p>
                      </div>
                    </div>
                  ) : (
                    <p className={\`text-text-secondary font-medium leading-relaxed \${project.featured && !previewOnly ? 'text-lg max-w-lg' : 'text-base line-clamp-4'}\`}>
                      {project.description}
                    </p>
                  )}
                </div>`;

code = code.replace(descBlock, newDescBlock);

fs.writeFileSync('src/components/Projects.tsx', code);
