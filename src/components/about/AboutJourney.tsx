import { motion } from 'motion/react';
import Timeline, { TimelineItemData } from '../Timeline';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const JOURNEY_MILESTONES: TimelineItemData[] = [
  {
    id: 'curiosity',
    date: 'The Spark',
    title: 'Discovering the Invisible Logic',
    summary: (
      <p>
        My fascination with engineering began not with writing code, but with dismantling it. I spent hours exploring hidden directories on my first computer, driven by a quiet need to understand the underlying systems that governed the software I used every day.
      </p>
    ),
    content: (
      <>
        <p>
          Before I understood what programming was, I was obsessed with the idea that every piece of technology was built on a series of logical instructions. I was rarely satisfied simply consuming software; I wanted to pull back the curtain. That early curiosity—the desire to see how the pieces fit together—became the absolute foundation of my engineering career.
        </p>
      </>
    ),
    reflection: (
      <p>
        I learned early on that technology is not magic; it is architecture. This realization removed the intimidation of complex systems and replaced it with a methodical desire to learn how they are constructed.
      </p>
    )
  },
  {
    id: 'learning',
    date: 'Phase 01',
    title: 'From Observation to Instruction',
    summary: (
      <p>
        The transition from observing systems to manipulating them began with writing small, isolated scripts. It was my first experience giving a machine precise instructions and finding immediate satisfaction in its perfect execution.
      </p>
    ),
    content: (
      <>
        <p>
          Initially, I used code merely to automate repetitive tasks on my own machine. I was introduced to the concept of variables, loops, and basic logic. It was purely experimental. As I learned to string these scripts together, I realized that writing code was not just about solving isolated puzzles—it was about building environments.
        </p>
        <p>
          I began exploring how different languages handled logic differently, which naturally led me toward web technologies where I could build interfaces for my logic.
        </p>
      </>
    ),
    reflection: (
      <p>
        This phase taught me the value of deterministic logic. If a script failed, it was because my instructions were flawed, not the machine. It instilled a deep sense of ownership over my code that I carry into every project today.
      </p>
    )
  },
  {
    id: 'experimentation',
    date: 'Phase 02',
    title: 'Embracing Component Architecture',
    summary: (
      <p>
        As my projects grew in scope, managing global state and direct DOM manipulation became chaotic. I needed a structured way to build interfaces, leading to a fundamental shift in how I approached frontend engineering.
      </p>
    ),
    content: (
      <>
        <p>
          I adopted React not simply as a tool, but as a mental model. It forced me to stop thinking about a webpage as a single document and start thinking about it as a system of independent, reusable components. I learned to manage state predictably and isolate side effects.
        </p>
        <p>
          This was also when I began focusing heavily on TypeScript. I realized that catching errors at compile time wasn't just a convenience; it was a structural necessity for building reliable software that could be safely refactored.
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
        Architecture matters just as much on the client as it does on the server. A poorly structured frontend will eventually collapse under its own weight, no matter how clean the UI appears.
      </p>
    )
  },
  {
    id: 'first-products',
    date: 'Phase 03',
    title: 'The Production Reality Check',
    summary: (
      <p>
        Engineering a feature to work on localhost is relatively simple. Engineering a system to survive in a production environment, handled by unpredictable users, is an entirely different discipline.
      </p>
    ),
    content: (
      <>
        <p>
          My early full-stack applications functioned perfectly in isolation. However, deploying them exposed me to the harsh realities of network latency, unhandled exceptions, and concurrent state mutations. I experienced firsthand how fragile a system can be when it relies on optimistic assumptions.
        </p>
        <p>
          I had to rethink my approach entirely. I stopped focusing purely on syntax and feature delivery, and started studying system resilience, database indexing, and secure authentication flows. I learned that real engineering means anticipating failure long before it happens.
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
        Failure in production is the greatest teacher. It shifted my mindset from "How do I build this?" to "How will this break, and how do I prevent it?" This fundamentally changed my definition of 'done'.
      </p>
    )
  },
  {
    id: 'communities',
    date: 'Phase 04',
    title: 'Decentralization and Leadership',
    summary: (
      <p>
        Transitioning from building solo projects to architecting solutions in high-pressure, collaborative environments. This required a shift from writing clever code to writing communicative code.
      </p>
    ),
    content: (
      <>
        <p>
          Participating in global challenges pushed me far beyond my comfort zone. It was no longer just about technical execution; it was about architecture, delegation, and rapid decision-making. We faced the challenge of implementing complex cryptographic constraints (like zero-knowledge proofs) while simultaneously delivering a seamless user experience within a highly constrained timeframe.
        </p>
        <p>
          I took on the role of Lead Architect, which meant my primary responsibility was ensuring that the different pieces of the system—smart contracts, backend services, and the frontend interface—could integrate cleanly. I learned that technical debt accrued during early architecture phases becomes exponentially more expensive as deadlines approach.
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
        Leadership in engineering is not about making all the technical decisions; it is about creating an environment where the right technical decisions can be made by the team. Clarity in communication is just as critical as clarity in code.
      </p>
    )
  },
  {
    id: 'continuous-growth',
    date: 'The Present',
    title: 'Pursuing Craftsmanship',
    summary: (
      <p>
        Today, my focus has shifted from simply building functional software to engineering reliable, secure, and performant systems. I am motivated by the pursuit of digital craftsmanship.
      </p>
    ),
    content: (
      <>
        <p>
          I am currently deepening my expertise in distributed systems, advanced cybersecurity principles, and AI integrations. I am no longer satisfied with assembling libraries; I want to understand the underlying protocols and memory management. 
        </p>
        <p>
          The journey from writing isolated scripts to designing scalable architecture has fundamentally shaped my philosophy. I believe that software should respect the user's time and privacy, operating seamlessly without demanding unnecessary attention.
        </p>
      </>
    ),
    reflection: (
      <p>
        Growth as an engineer is asymptotic. The more you learn, the more you realize how much you do not know. True craftsmanship is embracing that continuous, endless refinement.
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
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
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
