import { useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { TECHNOLOGIES, TechnologyProfile } from '../data/technologies';
import { SKILL_GROUPS } from '../data/skills';
import TechnologyHeader from '../components/technology/TechnologyHeader';
import WhyIUseItSection from '../components/technology/WhyIUseItSection';
import ProjectReference from '../components/technology/ProjectReference';
import ConceptReference from '../components/technology/ConceptReference';
import ArchitecturePanel from '../components/technology/ArchitecturePanel';
import DecisionPanel from '../components/technology/DecisionPanel';
import LessonsLearnedSection from '../components/technology/LessonsLearnedSection';
import ResourceCollection from '../components/technology/ResourceCollection';
import FutureExplorationSection from '../components/technology/FutureExplorationSection';
import RelatedTechnologiesSection from '../components/technology/RelatedTechnologiesSection';

export default function TechnologyPage() {
  const { id } = useParams<{ id: string }>();

  const profile = useMemo(() => {
    // Check for explicitly defined rich profile first
    const explicitProfile = TECHNOLOGIES.find(t => t.id === id);
    if (explicitProfile) return explicitProfile;

    // Fallback: Generate a basic profile from SKILL_GROUPS data
    let foundSkill = null;
    for (const group of SKILL_GROUPS) {
      const match = group.skills.find(s => s.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '') === id);
      if (match) {
        foundSkill = match;
        break;
      }
    }

    if (!foundSkill) return null;

    const generatedProfile: TechnologyProfile = {
      id: id as string,
      name: foundSkill.name,
      overview: `${foundSkill.bestFor} I use ${foundSkill.name} regularly in my projects. I'm still documenting the full details of how I use it, but it's a core part of how I build things.`,
      whyIUseIt: {
        problemsSolved: foundSkill.engineeringDepth || ['Helps me build faster.', 'Reduces bugs and friction.', 'Good fit for the problems I work on.'],
        whyChosen: `I picked ${foundSkill.name} because it works well for what I need, has solid docs, and a community that's already solved most of the edge cases I run into.`,
        whenToUse: foundSkill.bestFor || 'When it fits the problem well and keeps things simple.',
        whenToAvoid: foundSkill.tradeOffs || 'When something simpler would do the job just as well.',
        alternativesEvaluated: foundSkill.alternatives || []
      },
      projects: [],
      engineeringConcepts: foundSkill.engineeringDepth || [],
      relatedTechnologies: foundSkill.relatedTechnologies || [],
      architecturePatterns: [],
      engineeringDecisions: [],
      bestPractices: [
        'Read the docs before reaching for Stack Overflow.',
        'Write tests for the parts that matter most.',
        'Keep things modular so they\'re easier to change later.'
      ],
      lessonsLearned: [
        {
          title: 'Learn by doing',
          description: 'Reading about a tool is one thing — actually building with it and hitting the weird edge cases is where the real learning happens.'
        }
      ],
      resources: [],
      futureExploration: [
        'Going deeper into advanced patterns.',
        'Trying it with different project types.'
      ]
    };
    return generatedProfile;
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!profile) {
    return <Navigate to="/skills" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      <TechnologyHeader profile={profile} />
      
      <WhyIUseItSection whyIUseIt={profile.whyIUseIt} />
      
      {profile.projects && profile.projects.length > 0 && (
        <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/30">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 tracking-tight">Applied Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {profile.projects.map((project, idx) => (
                <ProjectReference key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedTechnologiesSection relatedTechnologies={profile.relatedTechnologies} />

      <ConceptReference concepts={profile.engineeringConcepts} />
      
      <ArchitecturePanel patterns={profile.architecturePatterns} />
      
      <DecisionPanel decisions={profile.engineeringDecisions} />
      
      <LessonsLearnedSection lessons={profile.lessonsLearned} bestPractices={profile.bestPractices} />
      
      <ResourceCollection resources={profile.resources} />
      
      <FutureExplorationSection areas={profile.futureExploration} />
    </div>
  );
}
