import { motion } from 'motion/react';
import Timeline, { TimelineItemData } from '../Timeline';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const JOURNEY_MILESTONES: TimelineItemData[] = [
  {
    id: 'experimentation',
    date: 'Phase 02',
    title: 'Embracing Component Architecture',
    summary: (
      <p>
        As my projects got bigger, plain JS and spaghetti DOM code stopped working. I needed a better way to organize UI, which led me to React and component-based thinking.
      </p>
    ),
    content: (
      <>
        <p>
          React clicked for me because it made me think about UIs as systems, not pages. I started building reusable components, managing state properly, and actually thinking about data flow before writing code.
        </p>
        <p>
          This was also when TypeScript stopped feeling like extra work and started feeling necessary. Catching bugs before they hit the browser? Yes please.
        </p>
        <div className="pt-4">
          <Link to="/skills" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors pb-1">
            Explore Interface Skills <ArrowRight className="w-3 h-3 ml-2" />
          </Link>
        </div>
      </>
    ),
    reflection: (
      <p>
        A messy frontend will eventually bite you, no matter how good the UI looks on the surface. Structure matters.
      </p>
    )
  },
  {
    id: 'first-products',
    date: 'Phase 03',
    title: 'The Production Reality Check',
    summary: (
      <p>
        Making something work on localhost is easy. Making it survive real users on a real server is a completely different story.
      </p>
    ),
    content: (
      <>
        <p>
          My first deployed apps broke in ways I never expected — weird edge cases, slow queries, auth bugs. I learned quickly that "it works on my machine" means absolutely nothing.
        </p>
        <p>
          That's when I started actually caring about things like database indexing, error handling, and secure auth flows. It stopped being about just shipping features and started being about shipping things that don't break.
        </p>
        <div className="pt-4">
          <Link to="/projects" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors pb-1">
            View Production Projects <ArrowRight className="w-3 h-3 ml-2" />
          </Link>
        </div>
      </>
    ),
    reflection: (
      <p>
        Production bugs taught me more than any tutorial. My question went from "how do I build this?" to "how will this break?"
      </p>
    )
  },
  {
    id: 'communities',
    date: 'Phase 04',
    title: 'Decentralization and Leadership',
    summary: (
      <p>
         Moving from solo projects to working with other people. Writing code that teammates can actually read turned out to be way harder than writing clever code.
      </p>
    ),
    content: (
      <>
        <p>
          Hackathons pushed me way outside my comfort zone. It wasn't just about coding anymore — it was about making quick architectural decisions, dividing work, and integrating complex pieces (like ZK proofs) under insane time pressure.
        </p>
        <p>
           I ended up doing a lot of the architecture planning, which meant figuring out how the smart contracts, backend, and frontend would all talk to each other. Shortcut decisions made on day one always came back to haunt us on day three.
        </p>
        <div className="pt-4">
          <Link to="/achievements/global-hackathon-2024" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors pb-1">
            View Hackathon Architecture <ArrowRight className="w-3 h-3 ml-2" />
          </Link>
        </div>
      </>
    ),
    reflection: (
      <p>
        Leading a tech team isn't about making all the decisions — it's about making sure the team has what they need to make good ones. Clear communication beats clever code.
      </p>
    )
  },
  {
    id: 'continuous-growth',
    date: 'The Present',
    title: 'Pursuing Craftsmanship',
    summary: (
      <p>
        Right now I'm less interested in just making things work and more interested in understanding why they work. Building stuff that's actually reliable and secure, not just functional.
      </p>
    ),
    content: (
      <>
        <p>
          I'm going deeper into distributed systems, cybersecurity, and AI integration. I'm past the phase of just plugging libraries together — I want to understand the protocols and internals.
        </p>
        <p>
          Looking back, the biggest shift has been learning to write code for other people, not just for myself. Software should be something users barely notice because it just works.
        </p>
      </>
    ),
    reflection: (
      <p>
        The more I learn, the more I realize how much I don't know. And honestly, that's the best part.
      </p>
    )
  }
];

export default function AboutJourney() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Growth Journey
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-8">
                How curiosity evolved into craftsmanship.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                A timeline is rarely linear. This is not a history of dates, but a record of the challenges, failures, and shifts in perspective that shaped my engineering mindset.
              </p>
            </motion.div>

            <Timeline items={JOURNEY_MILESTONES} />
          </div>
        </div>
      </div>
    </section>
  );
}
