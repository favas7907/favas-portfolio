import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code2 } from 'lucide-react';
import { Project } from '../../../types';
import { ENGINEERING_CONCEPTS } from '../../../data/concepts';

export default function ProjectRelationshipPanel({ project }: { project: Project }) {
  // Find concepts that reference this project
  const relatedConcepts = ENGINEERING_CONCEPTS.filter(concept => 
    concept.projects?.some(p => p.url.includes(project.id))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16 pt-16 border-t border-slate-200">
      {/* Related Concepts */}
      <div>
        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Related Concepts
        </h4>
        {relatedConcepts.length > 0 ? (
          <div className="flex flex-col gap-3">
            {relatedConcepts.map(concept => (
              <Link
                key={concept.id}
                to={`/concepts#concept-${concept.id}`}
                className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-slate-50 transition-all flex items-center justify-between"
              >
                <div>
                  <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{concept.title}</h5>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">{concept.domainId}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500 font-light italic">Concepts mapping is pending for this project.</p>
        )}
      </div>

      {/* Technologies Proven */}
      <div>
        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
          <Code2 className="w-4 h-4 text-blue-600" />
          Technologies Proven
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => {
            const techId = tech.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <Link
                key={tech}
                to={`/skills/${techId}`}
                className="inline-flex px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors"
              >
                {tech}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
