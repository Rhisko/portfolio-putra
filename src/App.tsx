import {
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Download,
  ExternalLink,
  FileText,
  Image,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  ShieldCheck,
  Target,
  UserRound,
  Wrench
} from "lucide-react";
import { useState } from "react";

import {
  about,
  careerObjective,
  documentation,
  experience,
  experienceDocuments,
  highlights,
  navigation,
  profile,
  projects,
  reasonsToHire,
  skills,
  training,
  values
} from "./data/portfolio";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3" aria-label={profile.name}>
          <span className="brand-mark">PS</span>
          <span>
            <span className="block text-base font-black leading-5 text-zinc-950">{profile.shortName}</span>
            <span className="block text-xs font-black uppercase text-zinc-500">Lifelong Learners</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={assetPath(profile.cvUrl)} className="btn-outline" download>
            CV
            <Download size={16} />
          </a>
          <a href={`https://wa.me/${profile.whatsapp}`} className="btn-primary">
            WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button className="mobile-menu-button lg:hidden" type="button" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <Menu size={22} />
        </button>
      </nav>

      {open ? (
        <div className="mobile-menu mx-5 mb-4 lg:hidden">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={assetPath(profile.cvUrl)} download onClick={() => setOpen(false)}>
            Download  CV
          </a>
        </div>
      ) : null}
    </header>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-white">
          <p className="hero-pill">FCAW & SMAW Welder | Safety Mindset | Quality Workmanship</p>
          <h1 className="mt-6 text-5xl font-black leading-none md:text-7xl">{profile.name}</h1>
          <p className="mt-5 max-w-3xl text-2xl font-black text-[color:var(--cv-yellow)] md:text-3xl">
            {profile.positioning}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">{profile.headline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={assetPath(profile.cvUrl)} className="btn-primary" download>
              Download CV
              <Download size={18} />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
              <Phone size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <article key={item.label} className="hero-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="cv-showcase">
          <div className="profile-portrait-card">
            <div className="portrait-frame">
              <img src={assetPath(profile.profilePhoto)} alt={`${profile.name} profile portrait`} />
            </div>
            <div className="portrait-caption">
              <span>Keep Moving Forward</span>
              <strong>{profile.role}</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section id="profile" className="section-wrap">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Profile" title={about.title} />
          <div className="space-y-5 text-base leading-8 text-zinc-600">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((item, index) => {
            const icons = [ClipboardCheck, ShieldCheck, BadgeCheck, CheckCircle2];
            const Icon = icons[index] ?? CheckCircle2;
            return (
              <article key={item.title} className="feature-card">
                <Icon className="text-[color:var(--cv-yellow)]" size={30} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="muted-section">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="Skills"
          title="Welding capability supported by disciplined field execution."
          copy="Practical welding capability backed by FCAW and SMAW training, safety awareness, SOP compliance, teamwork, and consistent attention to welding quality."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {skills.map((group, index) => {
            const icons = [Wrench, Target, UserRound];
            const Icon = icons[index] ?? CheckCircle2;
            return (
              <article key={group.category} className={index === 1 ? "skill-card skill-card-featured" : "skill-card"}>
                <Icon size={30} />
                <h3>{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap">
      <SectionHeader eyebrow="Experience" title="Work experience and technical training based on the resume." />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {experience.map((item) => (
            <article key={item.company} className="timeline-card">
              <p className="card-eyebrow">{item.company}</p>
              <h3>{item.role}</h3>
              <p className="date-badge">{item.period}</p>
              <p className="mt-5 text-sm leading-7 text-zinc-600">{item.description}</p>
              <ul className="impact-list">
                {item.impact.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="training-panel">
          <p className="eyebrow">Training</p>
          <h3>Welding Training - PT Global Sarana Internusa</h3>
          <div className="mt-6 space-y-4">
            {training.map((item) => (
              <article key={item.title} className="training-row">
                <FileText size={18} />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.provider} | {item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceDocumentsSection() {
  return (
    <section className="credentials-section">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeader eyebrow="Experience Credentials" title={experienceDocuments.title} copy={experienceDocuments.intro} />
          <div className="credential-summary">
            <span>{experienceDocuments.items.filter((item) => item.label === "Employment").length} employment documents</span>
            <span>{experienceDocuments.items.filter((item) => item.label === "Training").length} training certificates</span>
          </div>
        </div>

        <div className="credentials-grid">
          {experienceDocuments.items.map((item) => (
            <a
              key={item.src}
              href={assetPath(item.src)}
              target="_blank"
              rel="noreferrer"
              className={item.orientation === "landscape" ? "credential-card credential-card-landscape group" : "credential-card group"}
            >
              <div className="credential-image">
                <img src={assetPath(item.src)} alt={item.title} loading="lazy" />
              </div>
              <div className="credential-copy">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p className="issuer">{item.issuer}</p>
                <p>{item.detail}</p>
                <strong>
                  View document
                  <ExternalLink size={14} />
                </strong>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="muted-section">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="Project Highlights"
          title="Welding experience presented as proof of workmanship."
          copy="Field documentation shows quality consistency, safety discipline, teamwork, and readiness to contribute in fabrication, workshop, construction, maintenance, or industrial welding environments."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="case-card">
              <p className="case-number">Case 0{index + 1}</p>
              <h3>{project.title}</h3>
              <p><strong>Challenge:</strong> {project.challenge}</p>
              <p><strong>Process:</strong> {project.process}</p>
              <p><strong>Result:</strong> {project.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentationSection() {
  return (
    <section id="documentation" className="documentation-section">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader eyebrow="Work Documentation" title={documentation.title} copy={documentation.intro} />
          <div className="proof-strip">
            {documentation.proofPoints.map((point) => (
              <span key={point}>
                <CheckCircle2 size={16} />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="documentation-layout">
          <article className="video-feature">
            <div className="video-frame">
              <video controls preload="metadata" poster={assetPath(documentation.video.poster)}>
                <source src={assetPath(documentation.video.src)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-badge">
                <PlayCircle size={18} />
                Process Video
              </div>
            </div>
            <div className="video-copy">
              <p className="card-eyebrow">Featured Documentation</p>
              <h3>{documentation.video.title}</h3>
              <p>{documentation.video.caption}</p>
            </div>
          </article>

          <div className="documentation-gallery">
            {documentation.gallery.map((item, index) => (
              <a
                key={item.src}
                href={assetPath(item.src)}
                target="_blank"
                rel="noreferrer"
                className={index === 4 ? "doc-card doc-card-wide group" : "doc-card group"}
              >
                <img src={assetPath(item.src)} alt={item.title} loading="lazy" />
                <div className="doc-overlay">
                  <span>
                    <Image size={14} />
                    {item.label}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ObjectiveSection() {
  return (
    <section className="section-wrap">
      <div className="objective-panel">
        <div>
          <p className="eyebrow">Career Objective</p>
          <h2>Ready to contribute as a disciplined and safety-minded welder.</h2>
          <p>{careerObjective}</p>
        </div>
        <div className="hire-panel">
          <p className="eyebrow">Why Hire Me</p>
          <h3>Reasons to consider this profile</h3>
          <ul>
            {reasonsToHire.map((reason) => (
              <li key={reason}>
                <CheckCircle2 size={18} />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to welder opportunities and interviews.</h2>
          <p>
            I am available for recruitment discussions, interviews, and welder opportunities where safety, quality,
            discipline, and reliable execution matter. I am ready to explain my welding experience, training, and
            work readiness in a professional conversation.
          </p>
        </div>

        <div className="contact-card">
          <a href={`mailto:${profile.email}`}>
            <Mail size={19} />
            <span>{profile.email}</span>
          </a>
          <a href={`https://wa.me/${profile.whatsapp}`}>
            <Phone size={19} />
            <span>{profile.phone}</span>
          </a>
          <div>
            <MapPin size={19} />
            <span>{profile.location}</span>
          </div>
          <a href={assetPath(profile.cvUrl)} className="btn-primary mt-2" download>
            Download CV
            <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-7 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Keep Moving Forward.</p>
        <a href="#">Back to top</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <ProfileSection />
        <SkillsSection />
        <ExperienceSection />
        <ExperienceDocumentsSection />
        <ProjectsSection />
        <DocumentationSection />
        <ObjectiveSection />
        <ContactSection />
      </main>
      <Footer />
      <a href="#" className="scroll-top" aria-label="Back to top">
        <ArrowUp size={20} />
      </a>
    </div>
  );
}
