import { ArrowDownRight, ArrowUpRight, Boxes, Braces, Cpu, Layers3 } from "lucide-react";

function EightbitsMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand brand-compact" : "brand"}>
      <svg viewBox="0 0 48 78" aria-hidden="true" className="brand-mark">
        <path d="M44 32V10a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4Z" fill="#8b8aff" />
        <path d="M12 32V10a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4Z" fill="#5457ff" />
        <path d="M32 76H12a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4Z" fill="#5457ff" />
        <path d="M44 66V44a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4ZM12 66V44a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4ZM32 42H12a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4Z" fill="#5457ff" />
        <path d="M32 12H12a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4Z" fill="#8b8aff" />
      </svg>
      {!compact && <span className="brand-type" aria-label="eightbits.us">eightbits<span>.us</span></span>}
    </span>
  );
}

const services = [
  { number: "01", icon: Layers3, title: "Product strategy", text: "We turn ambitious ideas into a focused product direction, a clear system, and a roadmap worth building.", tags: ["Discovery", "UX systems", "Technical planning"] },
  { number: "02", icon: Braces, title: "Software engineering", text: "From first release to resilient platform, we design and ship software that stays fast as the idea grows.", tags: ["Web products", "Platforms", "Infrastructure"] },
  { number: "03", icon: Cpu, title: "Applied AI", text: "We build agents, automations, and intelligent interfaces around real workflows—not technology demos.", tags: ["Agent systems", "Automation", "AI interfaces"] },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="logo-link" href="#top" aria-label="Eightbits home"><EightbitsMark /></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#products">Products</a><a href="#studio">Studio</a></nav>
        <a className="header-cta" href="mailto:hello@eightbits.us">Let&apos;s talk <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-orbit" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-core"><EightbitsMark compact /></span></div>
        <div className="hero-kicker"><span>Independent technology studio</span><span>Prishtina · New York · Remote</span></div>
        <h1>WE BUILD<br /><em>WHAT&apos;S NEXT.</em></h1>
        <div className="hero-bottom"><p>Eightbits designs and engineers category-defining digital products, autonomous systems, and AI-native companies.</p><a href="#products" className="round-link" aria-label="Explore our products"><ArrowDownRight size={28} /></a></div>
      </section>

      <div className="marquee" aria-label="Our capabilities"><div>STRATEGY <i /> DESIGN <i /> ENGINEERING <i /> AI SYSTEMS <i /> VENTURES <i /> STRATEGY <i /> DESIGN <i /> ENGINEERING <i /> AI SYSTEMS <i /> VENTURES</div></div>

      <section className="services shell" id="services">
        <div className="section-intro"><p className="section-label">/ What we do</p><h2>One team from the<br />first sketch to launch.</h2><p>We partner closely with founders and teams to solve the hard parts: defining the right product, making it useful, and building it properly.</p></div>
        <div className="service-list">
          {services.map(({ number, icon: Icon, title, text, tags }) => <article className="service-row" key={title}><span className="service-number">{number}</span><span className="service-icon"><Icon size={24} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{text}</p></div><ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="products" id="products"><div className="shell">
        <div className="products-heading"><p className="section-label">/ Products from the studio</p><h2>Ideas we believe<br />should exist.</h2><p>We do more than client work. We use the same craft to build companies and open systems of our own.</p></div>
        <article className="product-card taskwish-card">
          <div className="product-copy"><div className="product-meta"><span>01 / Developer infrastructure</span><span>OPEN SOURCE</span></div><div className="taskwish-logo" aria-label="TaskWish"><span>✓✓</span> TaskWish</div><h3>The framework for building autonomous companies.</h3><p>Typed actors, tools, state, and AI workflows in TypeScript—designed to be discovered, called, and composed by other agents.</p><a href="https://taskwish.ai" target="_blank" rel="noreferrer">Visit TaskWish <ArrowUpRight size={17} /></a></div>
          <div className="taskwish-visual" aria-hidden="true"><div className="code-top"><span /><span /><span /><b>company.ts</b></div><pre><span className="code-purple">company</span>(<span className="code-green">&quot;studio&quot;</span>, {'{'}{`\n  actors: [\n    `}<span className="code-blue">researcher</span>,{`\n    `}<span className="code-blue">builder</span>,{`\n    `}<span className="code-blue">reviewer</span>,{`\n  ],\n  state: `}<span className="code-purple">shared</span>(),{`\n`}{'}'});</pre><div className="flow"><span>Research</span><i>→</i><span>Build</span><i>→</i><span>Review</span></div></div>
        </article>
        <article className="product-card boria-card">
          <div className="boria-visual" aria-hidden="true"><div className="radar-grid" /><span className="drone drone-one">◇</span><span className="drone drone-two">◇</span><span className="drone drone-three">◇</span><div className="radar-status"><span>LIVE MESH</span><b>128</b><small>ACTIVE NODES</small></div><div className="coordinates">NORTH RIDGE / ADRIATIC ARC<br />WIND 12 KT / MESH STABLE</div></div>
          <div className="product-copy"><div className="product-meta"><span>02 / Autonomous hardware</span><span>EARLY ACCESS</span></div><div className="boria-logo"><Boxes size={27} /> BORIA</div><h3>Autonomous machines that think together.</h3><p>Mountain-born hardware and an open, peer-to-peer protocol for drone swarms that coordinate—even when the network breaks.</p><a href="https://boria.ai" target="_blank" rel="noreferrer">Explore Boria <ArrowUpRight size={17} /></a></div>
        </article>
      </div></section>

      <section className="studio shell" id="studio"><p className="section-label">/ The studio</p><div className="studio-grid"><h2>Small by design.<br />Serious by default.</h2><div><p>Eightbits is a senior, hands-on team for work that needs equal parts product judgment, design craft, and technical depth.</p><p>We join early, move in tight loops, and stay close enough to the work to make every decision count.</p></div><div className="studio-principles"><span><b>01</b>Clarity before velocity</span><span><b>02</b>Systems over surfaces</span><span><b>03</b>Outcomes over output</span></div></div></section>

      <section className="contact shell"><div><p className="section-label">/ Initiate a project</p><h2>BUILD THE<br /><em>IMPOSSIBLE.</em></h2></div><a href="mailto:hello@eightbits.us" className="contact-link">hello@eightbits.us <ArrowUpRight size={30} /></a></section>
      <footer className="shell"><EightbitsMark /><p>Digital products, intelligent systems, and ventures.</p><div><a href="https://www.linkedin.com/company/eight-8-bits/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
