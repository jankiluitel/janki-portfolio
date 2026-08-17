import React from 'react'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Code2,
  Cloud,
  Database,
  ShieldCheck,
  Users,
  ExternalLink,
  GraduationCap,
} from 'lucide-react'

const projects = [
  {
    title: 'SplashKit Open-Source Development',
    eyebrow: 'Featured Experience',
    description:
      'Contributing to the SplashKit documentation ecosystem through reviewed GitHub pull requests, technical documentation, usage examples and team leadership.',
    tags: ['Git', 'GitHub', 'Astro', 'C++', 'C#', 'Python', 'JavaScript'],
    links: [
      ['GitHub Repository', 'https://github.com/jankiluitel/ThothTech-Documentation-Website'],
      ['PR #182 — Peer Review Template', 'https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/182'],
      ['PR #781 — Contributor FAQ', 'https://github.com/thoth-tech/splashkit.io-starlight/pull/781'],
      ['PR #798 — move_camera_to Example', 'https://github.com/thoth-tech/splashkit.io-starlight/pull/798'],
      ['PR #792 — AI NPC Dialogue', 'https://github.com/thoth-tech/splashkit.io-starlight/pull/792'],
      ['PR #749 — AI Prompt Helper', 'https://github.com/thoth-tech/splashkit.io-starlight/pull/749'],
      ['PR #726 — draw_line Example', 'https://github.com/thoth-tech/splashkit.io-starlight/pull/726'],
    ],
  },
  {
    title: 'Secure Web Application & DevSecOps',
    eyebrow: 'University Project',
    description:
      'Built and tested a secure web application while applying version control, debugging, testing, cloud and DevSecOps practices throughout the development lifecycle.',
    tags: ['C++', 'HTML', 'CSS', 'MySQL', 'AWS', 'GitHub'],
  },
  {
    title: 'Unity C# Game',
    eyebrow: 'Software Development',
    description:
      'Implemented player movement, weapons, ammo recharge, power-ups, enemy behaviour, health management, camera follow and game-state logic in Unity.',
    tags: ['C#', 'Unity', 'OOP', 'Game Logic'],
  },
  {
    title: 'Smart Home / IoT System',
    eyebrow: 'IoT & Cloud',
    description:
      'Designed an IoT solution using messaging, automation and scalable service concepts for smart-home monitoring and control.',
    tags: ['Node.js', 'MQTT', 'Node-RED', 'MongoDB', 'AWS'],
  },
  {
    title: 'Healthcare Mobile App Prototype',
    eyebrow: 'UX / Product',
    description:
      'Designed a high-fidelity mobile experience focused on helping international students access healthcare information and services through clear, user-centred flows.',
    tags: ['Figma', 'User Research', 'UX', 'Prototyping'],
    links: [
      ['Open Figma Prototype', 'https://www.figma.com/proto/OkzhYy5Kee0rFUhoVOEuj0/TEAM?node-id=2-5&starting-point-node-id=2%3A5'],
    ],
  },
  {
    title: 'Python Programming Exercises',
    eyebrow: 'Additional Technical Work',
    description:
      'Built small Python programs that demonstrate core programming fundamentals including functions, user input, constants, arithmetic logic and structured output.',
    tags: ['Python', 'Functions', 'Problem Solving'],
    links: [
      ['Change Calculator', '/downloads/change-calculator.py'],
      ['Bird Airspeed Calculator', '/downloads/bird-airspeed-calculator.py'],
    ],
  },
  {
    title: '3D Modelling Exercises',
    eyebrow: 'Creative Technical Work',
    description:
      'Created Blender modelling exercises including a candle, gothic arch and lantern. These projects demonstrate spatial design, visual iteration and familiarity with 3D creative tooling.',
    tags: ['Blender', '3D Modelling', 'Visual Design'],
    links: [
      ['Candle .blend', '/downloads/candle.blend'],
      ['Gothic Arch .blend', '/downloads/gothic-arch.blend'],
      ['Lantern .blend', '/downloads/lantern.blend'],
    ],
  },
]

const skillGroups = [
  ['Languages', ['Python', 'Java', 'C++', 'C#', 'JavaScript', 'SQL']],
  ['Web', ['React', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap', 'Astro']],
  ['Cloud & DevOps', ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD']],
  ['Data', ['MySQL', 'Microsoft Excel', 'Data Analysis', 'Data Reporting']],
  ['Tools', ['Git', 'GitHub', 'Linux', 'VS Code', 'Figma', 'Blender']],
]

const certs = [
  'IBM Data Analyst Professional Certificate',
  'Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp',
  'Digital Transformation Foundations',
  'Advanced Programming & Web Development Suite',
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top">JL.</a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy">
            <p className="kicker">FINAL-YEAR INFORMATION TECHNOLOGY STUDENT</p>
            <h1>
              I build practical
              <span> technology solutions.</span>
            </h1>
            <p className="hero-text">
              I’m Janki Luitel, a final-year Deakin University IT student with hands-on experience across
              software development, cloud technologies, data analytics, cybersecurity and
              open-source collaboration. I’m currently seeking graduate and entry-level technology opportunities in Melbourne.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="button ghost" href="/Janki_Luitel_Resume.pdf" download>
                Resume <Download size={18} />
              </a>
            </div>

            <div className="social-row">
              <a href="https://github.com/jankiluitel" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jankiluitel/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:jankiluitel10@gmail.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="avatar">JL</div>
            <div>
              <p className="muted">Currently focused on</p>
              <h3>Graduate & entry-level technology opportunities</h3>
              <div className="location"><MapPin size={16} /> Melbourne, Australia</div>
            </div>
            <div className="metric-grid">
              <div><strong>6+</strong><span>Open-source PRs</span></div>
              <div><strong>4</strong><span>Core tech areas</span></div>
              <div><strong>2026</strong><span>Graduation</span></div>
              <div><strong>Team</strong><span>Leadership</span></div>
            </div>
          </aside>
        </section>

        <section className="section split" id="about">
          <div>
            <p className="section-label">ABOUT</p>
            <h2>Technical depth with a people-first mindset.</h2>
          </div>
          <div className="about-copy">
            <p>
              I’m completing a Bachelor of Information Technology at Deakin University and have
              developed practical experience through technical projects, open-source work and
              collaborative development environments.
            </p>
            <p>
              My strongest current evidence comes from Thoth Tech’s SplashKit project, where I
              contribute to GitHub-based development, documentation, review workflows and team
              coordination. I also bring customer-facing and leadership experience that strengthens
              my communication, problem-solving and stakeholder skills.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <div>
              <p className="section-label">EXPERIENCE</p>
              <h2>Building, reviewing and leading.</h2>
            </div>
          </div>

          <div className="experience-grid">
            <article className="experience-card featured">
              <div className="icon-box"><Users size={22} /></div>
              <div>
                <p className="eyebrow">2026 — PRESENT</p>
                <h3>Senior Developer / Team Leader</h3>
                <h4>Thoth Tech — SplashKit</h4>
                <ul>
                  <li>Contribute to open-source documentation and usage examples through GitHub pull requests.</li>
                  <li>Review contributions, respond to feedback and support quality-focused development workflows.</li>
                  <li>Coordinate tasks, mentor contributors and support technical discussions within the team.</li>
                </ul>
              </div>
            </article>

            <article className="experience-card">
              <div className="icon-box"><Users size={22} /></div>
              <div>
                <p className="eyebrow">2023</p>
                <h3>Team Member → Team Leader → Team Manager</h3>
                <h4>My Equation</h4>
                <ul>
                  <li>Promoted twice within ten months based on performance and leadership.</li>
                  <li>Mentored team members, coordinated training and supported technical education presentations.</li>
                </ul>
              </div>
            </article>

            <article className="experience-card">
              <div className="icon-box"><Users size={22} /></div>
              <div>
                <p className="eyebrow">CURRENT</p>
                <h3>Service Department Team Member</h3>
                <h4>Coles Supermarket</h4>
                <ul>
                  <li>Deliver customer service in a fast-paced environment while managing competing priorities.</li>
                  <li>Resolve enquiries professionally while maintaining accuracy, teamwork and operational standards.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-label">SELECTED WORK</p>
              <h2>Projects with evidence behind them.</h2>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${index === 0 ? 'wide' : ''}`} key={project.title}>
                <div className="project-top">
                  <p className="eyebrow">{project.eyebrow}</p>
                  {index === 0 ? <Code2 size={22} /> : index === 1 ? <ShieldCheck size={22} /> : index === 3 ? <Cloud size={22} /> : index === 5 ? <Database size={22} /> : <Code2 size={22} />}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>

                {project.links && (
                  <div className="link-list">
                    {project.links.map(([label, url]) => (
                      <a href={url} target="_blank" rel="noreferrer" key={url}>
                        {label} <ExternalLink size={15} />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <div>
              <p className="section-label">SKILLS</p>
              <h2>Tools I use to turn ideas into working systems.</h2>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map(([group, skills]) => (
              <article className="skill-card" key={group}>
                <h3>{group}</h3>
                <div className="tag-row">
                  {skills.map(skill => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section cert-section">
          <div>
            <p className="section-label">CERTIFICATIONS</p>
            <h2>Continuous learning.</h2>
          </div>
          <div className="cert-list">
            {certs.map(cert => (
              <div className="cert-item" key={cert}>
                <GraduationCap size={20} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="section-label">CONTACT</p>
          <h2>Let’s build something meaningful.</h2>
          <p>
            I’m currently exploring graduate and entry-level opportunities across software,
            technology consulting, systems, data, cloud and IT.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:jankiluitel10@gmail.com">
              Email me <Mail size={18} />
            </a>
            <a className="button ghost" href="https://www.linkedin.com/in/jankiluitel/" target="_blank" rel="noreferrer">
              LinkedIn <Linkedin size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Janki Luitel</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  )
}

export default App
