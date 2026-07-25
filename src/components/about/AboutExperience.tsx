import { motion } from 'motion/react';
import Experience, { ExperienceItemData } from '../Experience';

const EXPERIENCE_ITEMS: ExperienceItemData[] = [
  {
    id: 'cyberguard',
    period: 'Winter 2023',
    category: 'Learning & Contributing',
    role: 'Cybersecurity Trainee',
    organization: 'CyberGuard Inc.',
    summary: <p>Conducted vulnerability assessments and penetration testing for internal applications.</p>,
    challenge: (
      <p>Internal applications often carried legacy code that had not been audited for modern security standards. The challenge was not just finding vulnerabilities, but understanding how they were introduced.</p>
    ),
    responsibility: (
      <p>I was responsible for running vulnerability assessments and learning the practical application of OWASP Top 10 principles across live, internal networks.</p>
    ),
    actions: (
      <p>Instead of just running automated tools, I traced reported vulnerabilities back to the source code to understand the underlying architectural flaws, such as improper input validation and misconfigured CORS.</p>
    ),
    impact: (
      <p>I documented three critical path-traversal vulnerabilities and created a patch guide for the internal development team, directly improving the security posture of their legacy inventory.</p>
    ),
    learning: (
      <p>I learned that security is not a perimeter defense; it must be baked into the application architecture. An unvalidated input on a trusted internal tool is just as dangerous as an exposed public endpoint.</p>
    ),
    influence: (
      <p>This experience completely shifted my approach to web development. I now build applications with a "zero-trust" mindset, assuming every input is malicious until validated.</p>
    ),
    links: [
      { label: 'View Security Skills', url: '/skills' }
    ]
  },
  {
    id: 'techflow',
    period: 'Summer 2024',
    category: 'Collaborating & Taking Ownership',
    role: 'Software Engineering Intern',
    organization: 'TechFlow Solutions',
    summary: <p>Assisted in developing a high-traffic e-commerce platform and optimizing frontend performance.</p>,
    challenge: (
      <p>The company's primary e-commerce platform was experiencing severe client-side performance degradation during peak traffic, leading to dropped carts and poor user retention.</p>
    ),
    responsibility: (
      <p>I was tasked with assisting the frontend team in identifying performance bottlenecks and implementing optimizations across the product catalog and checkout flows.</p>
    ),
    actions: (
      <p>I profiled the application to isolate heavy renders, transitioned monolithic components into a micro-frontend architecture using React, and implemented aggressive code-splitting and memoization strategies.</p>
    ),
    impact: (
      <p>My optimizations reduced the initial load time by 20%, significantly decreasing the time-to-interactive (TTI) metric and improving the overall perceived performance for end users.</p>
    ),
    learning: (
      <p>I learned how to measure performance objectively. I also learned the importance of clear communication when proposing architectural changes to senior engineers.</p>
    ),
    influence: (
      <p>I no longer rely on intuition for performance tuning. Every architectural decision I make now is backed by objective metrics and profiling data.</p>
    )
  },
  {
    id: 'hackathon',
    period: 'Fall 2024',
    category: 'Leading Teams & Building Communities',
    role: 'Lead Architect & Team Captain',
    organization: 'Global Web3 Hackathon',
    summary: <p>Led a team of four to first place among 200+ global teams by architecting a decentralized voting system.</p>,
    challenge: (
      <p>Hackathons are chaotic. The primary challenge is not just the technical complexity of building decentralized applications, but maintaining team focus and delivering a cohesive product within 48 hours.</p>
    ),
    responsibility: (
      <p>As team captain and lead architect, I was responsible for the system design, smart contract implementation, and ensuring that our frontend engineers had a stable API to integrate with.</p>
    ),
    actions: (
      <p>I established a clear schema and interface contracts within the first two hours. I mentored a teammate on integrating Web3 providers while I focused on the zero-knowledge proof implementation for voter anonymity.</p>
    ),
    impact: (
      <p>We delivered a fully functional, zero-knowledge quadratic voting platform that won first place out of 200+ teams. Beyond the win, every team member learned a new technology stack during the weekend.</p>
    ),
    learning: (
      <p>I learned that leadership in engineering is about removing blockers for your team. The best code is useless if the team cannot integrate it smoothly.</p>
    ),
    influence: (
      <p>This reinforced my belief that great software is built through collaboration. I now prioritize clean API contracts and clear documentation before writing business logic.</p>
    ),
    links: [
      { label: 'View Achievement Details', url: '/achievements/global-hackathon-2024' }
    ]
  },
  {
    id: 'open-source',
    period: '2024 – Present',
    category: 'Sharing Knowledge & Growing Others',
    role: 'Open Source Contributor & Mentor',
    organization: 'University Developer Community',
    summary: <p>Mentoring junior developers and maintaining open-source repositories for university projects.</p>,
    challenge: (
      <p>Many students struggle to bridge the gap between academic theory and practical software engineering. Open-source contribution is intimidating without guidance.</p>
    ),
    responsibility: (
      <p>I took the initiative to maintain several internal community repositories and act as a technical reviewer for student pull requests.</p>
    ),
    actions: (
      <p>I wrote comprehensive contribution guidelines, organized weekend pair-programming sessions, and refactored legacy projects to serve as clean, modern reference architectures (React/Node).</p>
    ),
    impact: (
      <p>I helped onboard over 20 new contributors, reviewing and merging their first pull requests. The community repositories now have active, self-sustaining development cycles.</p>
    ),
    learning: (
      <p>I learned how to give constructive, empathetic code reviews. Pointing out a flaw is easy; guiding someone to the correct solution without discouraging them takes practice.</p>
    ),
    influence: (
      <p>Mentoring forces me to truly understand my own tools. Explaining complex concepts to beginners is the ultimate test of my own technical clarity.</p>
    ),
    links: [
      { label: 'View Project Portfolio', url: '/projects' }
    ]
  },
  {
    id: 'devconnect-architecture',
    period: 'Present',
    category: 'Growing Myself',
    role: 'Full Stack Architect',
    organization: 'Independent Research & Development',
    summary: <p>Architecting DevConnect, a real-time platform that handles concurrent WebSocket state securely.</p>,
    challenge: (
      <p>Building a platform that can handle real-time state synchronization across hundreds of concurrent users without race conditions or memory leaks is a significant architectural challenge.</p>
    ),
    responsibility: (
      <p>I took complete ownership of the entire system lifecycle—from the initial database schema design to the client-side state management and deployment pipeline.</p>
    ),
    actions: (
      <p>I implemented a hybrid database strategy using PostgreSQL for persistent relational data and Firebase Realtime Database for ephemeral connection states. I enforced strict typings across the network boundary.</p>
    ),
    impact: (
      <p>The resulting architecture successfully separated concerns, keeping the relational database load low while providing a seamless, instant experience for the end user.</p>
    ),
    learning: (
      <p>I learned that full-stack engineering is not just knowing how to write frontend and backend code, but understanding exactly where to draw the boundary between them.</p>
    ),
    influence: (
      <p>This deep dive solidified my transition from a developer who consumes APIs to an architect who designs distributed systems. It dictates how I approach every new project.</p>
    ),
    links: [
      { label: 'Explore DevConnect Architecture', url: '/projects/devconnect' }
    ]
  }
];

export default function AboutExperience() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-3 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                Experience & Leadership
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-6">
                Creating impact through engineering, collaboration, and mentorship.
              </p>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Leadership is not about titles; it is about taking ownership, sharing knowledge, and elevating the team.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <Experience items={EXPERIENCE_ITEMS} />
          </div>
          
        </div>
      </div>
    </section>
  );
}
