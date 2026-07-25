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
      overview: `${foundSkill.bestFor} This technology forms a critical part of my engineering toolkit. While a fully detailed profile is still being documented, I utilize it extensively in production environments to solve complex engineering challenges.`,
      whyIUseIt: {
        problemsSolved: foundSkill.engineeringDepth || ['Streamlines development workflows.', 'Enhances system reliability and performance.', 'Solves specific domain constraints.'],
        whyChosen: `I selected ${foundSkill.name} for its robustness, community support, and alignment with modern software engineering principles.`,
        whenToUse: foundSkill.bestFor || 'When the specific architectural requirements align with its core strengths.',
        whenToAvoid: foundSkill.tradeOffs || 'When simpler alternatives exist or the project constraints do not justify the overhead.',
        alternativesEvaluated: foundSkill.alternatives || ['Various industry-standard alternatives']
      },
      projects: [],
      engineeringConcepts: foundSkill.engineeringDepth || [],
      relatedTechnologies: foundSkill.relatedTechnologies || [],
      architecturePatterns: [],
      engineeringDecisions: [],
      bestPractices: [
        'Adhere strictly to official documentation and community standards.',
        'Implement robust testing and validation.',
        'Maintain clear boundaries of responsibility within the architecture.'
      ],
      lessonsLearned: [
        {
          title: 'Iterative Adoption',
          description: 'Understanding the underlying mechanics is more important than memorizing syntax. Deep dives into the documentation always pay off.'
        }
      ],
      resources: [],
      futureExploration: [
        'Advanced optimization techniques.',
        'Integration with emerging technologies.'
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
