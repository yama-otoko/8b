import { ArrowDownRight, ArrowUpRight, Boxes, Braces, Cpu, Layers3 } from "lucide-react";

function EightbitsMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand brand-compact" : "brand"}>
      <svg viewBox="77.8115 61.3982 44.6809 77.2036" aria-hidden="true" className="brand-mark">
        <path d="M121.833 93.9851L122.045 72.3033C122.056 71.1263 121.171 70.1729 119.978 70.1606L115.861 70.1183C114.665 70.106 113.765 71.0412 113.754 72.2181L113.543 93.9C113.53 95.1362 114.412 96.0851 115.608 96.0973L119.725 96.1395C120.917 96.152 121.821 95.2213 121.833 93.9851Z" fill="#BCDFF2" />
        <path d="M86.7561 93.6249L86.9675 71.943C86.9789 70.766 86.0107 69.8117 84.9035 69.8003L80.7645 69.7578C79.653 69.7464 78.6879 70.6809 78.6765 71.8578L78.4651 93.5395C78.4531 94.776 79.3998 95.7255 80.5113 95.7368L84.6503 95.7793C85.7575 95.7906 86.7441 94.8611 86.7561 93.6249Z" fill="#fff" />
        <path d="M113.281 132.164C113.292 130.967 112.369 130.047 111.105 130.035L89.2607 129.81C88.0849 129.798 87.1436 130.698 87.1319 131.896L87.092 135.997C87.0803 137.195 88.004 138.101 89.1798 138.113L111.025 138.338C112.288 138.351 113.229 137.464 113.24 136.266L113.281 132.164Z" fill="#fff" />
        <path d="M121.62 127.31L121.833 105.432C121.844 104.264 120.958 103.308 119.767 103.295L115.65 103.253C114.453 103.241 113.553 104.179 113.542 105.347L113.329 127.225C113.316 128.476 114.198 129.428 115.394 129.44L119.511 129.482C120.703 129.494 121.607 128.561 121.62 127.31Z" fill="#fff" />
        <path d="M86.5423 126.95L86.7556 105.072C86.767 103.904 85.8025 102.947 84.6948 102.935L80.5536 102.892C79.4415 102.881 78.476 103.819 78.4646 104.987L78.2513 126.864C78.2391 128.115 79.1863 129.068 80.2984 129.079L84.4395 129.122C85.5473 129.133 86.5301 128.2 86.5423 126.95Z" fill="#fff" />
        <path d="M113.795 68.0289L113.835 63.8668C113.846 62.7546 112.922 61.8501 111.659 61.8371L89.8102 61.6127C88.6342 61.6006 87.6975 62.486 87.6867 63.5982L87.6461 67.7603C87.6352 68.8725 88.5539 69.8378 89.73 69.8499L111.579 70.0743C112.842 70.0873 113.784 69.1411 113.795 68.0289Z" fill="#BCDFF2" />
        <path d="M113.356 101.779L113.397 97.6173C113.408 96.5052 112.484 95.6006 111.221 95.5876L89.3719 95.3632C88.1959 95.3511 87.2592 96.2365 87.2484 97.3486L87.2078 101.511C87.1969 102.623 88.1156 103.588 89.2917 103.6L111.14 103.825C112.404 103.838 113.346 102.892 113.356 101.779Z" fill="#fff" />
      </svg>
      {!compact && <span className="brand-type" aria-label="eightbits.us">eightbits<span>.us</span></span>}
    </span>
  );
}

const services = [
  { number: "01", icon: Layers3, title: "Digital modernization", text: "We translate complex operational requirements into secure, accessible, and maintainable digital services.", tags: ["Discovery", "Service design", "Technical planning"] },
  { number: "02", icon: Braces, title: "Software engineering", text: "We design and deliver dependable web platforms, internal tools, and cloud-ready systems built for long-term use.", tags: ["Web platforms", "Integrations", "Infrastructure"] },
  { number: "03", icon: Cpu, title: "AI & automation", text: "We apply AI to real workflows with human oversight, clear system boundaries, and measurable operational value.", tags: ["Agent systems", "Workflow automation", "AI interfaces"] },
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
        <div className="hero-kicker"><span>Software engineering · AI systems · Digital modernization</span><span>Prishtina · New York · Remote</span></div>
        <h1>DIGITAL SYSTEMS<br /><em>FOR CRITICAL WORK.</em></h1>
        <div className="hero-bottom"><p>Eightbits helps public-sector and enterprise teams turn complex requirements into dependable software, intelligent workflows, and clear digital services.</p><a href="#services" className="round-link" aria-label="Explore our capabilities"><ArrowDownRight size={28} /></a></div>
      </section>

      <div className="marquee" aria-label="Our capabilities"><div>STRATEGY <i /> DESIGN <i /> ENGINEERING <i /> AI SYSTEMS <i /> VENTURES <i /> STRATEGY <i /> DESIGN <i /> ENGINEERING <i /> AI SYSTEMS <i /> VENTURES</div></div>

      <section className="services shell" id="services">
        <div className="section-intro"><p className="section-label">/ Core capabilities</p><h2>From requirement<br />to reliable system.</h2><p>We work with mission owners and technical teams from early definition through delivery—reducing ambiguity, managing complexity, and building for continuity.</p></div>
        <div className="service-list">
          {services.map(({ number, icon: Icon, title, text, tags }) => <article className="service-row" key={title}><span className="service-number">{number}</span><span className="service-icon"><Icon size={24} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{text}</p></div><ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="products" id="products"><div className="shell">
        <div className="products-heading"><p className="section-label">/ Applied innovation</p><h2>Technology proven<br />through practice.</h2><p>Our own products keep our team close to emerging technology, real operating constraints, and the discipline of shipping usable systems.</p></div>
        <article className="product-card taskwish-card">
          <div className="product-copy"><div className="product-meta"><span>01 / Developer infrastructure</span><span>OPEN SOURCE</span></div><div className="taskwish-logo" aria-label="TaskWish"><span>✓✓</span> TaskWish</div><h3>The framework for building autonomous companies.</h3><p>Typed actors, tools, state, and AI workflows in TypeScript—designed to be discovered, called, and composed by other agents.</p><a href="https://taskwish.ai" target="_blank" rel="noreferrer">Visit TaskWish <ArrowUpRight size={17} /></a></div>
          <div className="taskwish-visual" aria-hidden="true"><div className="code-top"><span /><span /><span /><b>company.ts</b></div><pre><span className="code-purple">company</span>(<span className="code-green">&quot;studio&quot;</span>, {'{'}{`\n  actors: [\n    `}<span className="code-blue">researcher</span>,{`\n    `}<span className="code-blue">builder</span>,{`\n    `}<span className="code-blue">reviewer</span>,{`\n  ],\n  state: `}<span className="code-purple">shared</span>(),{`\n`}{'}'});</pre><div className="flow"><span>Research</span><i>→</i><span>Build</span><i>→</i><span>Review</span></div></div>
        </article>
        <article className="product-card boria-card">
          <div className="boria-visual" aria-hidden="true"><div className="radar-grid" /><span className="drone drone-one">◇</span><span className="drone drone-two">◇</span><span className="drone drone-three">◇</span><div className="radar-status"><span>LIVE MESH</span><b>128</b><small>ACTIVE NODES</small></div><div className="coordinates">NORTH RIDGE / ADRIATIC ARC<br />WIND 12 KT / MESH STABLE</div></div>
          <div className="product-copy"><div className="product-meta"><span>02 / Autonomous hardware</span><span>EARLY ACCESS</span></div><div className="boria-logo"><Boxes size={27} /> BORIA</div><h3>Autonomous machines that think together.</h3><p>Mountain-born hardware and an open, peer-to-peer protocol for drone swarms that coordinate—even when the network breaks.</p><a href="https://boria.ai" target="_blank" rel="noreferrer">Explore Boria <ArrowUpRight size={17} /></a></div>
        </article>
      </div></section>

      <section className="studio shell" id="studio"><p className="section-label">/ Why Eightbits</p><div className="studio-grid"><h2>A focused technical<br />delivery partner.</h2><div><p>Eightbits brings product judgment, design discipline, and engineering depth into one accountable team.</p><p>We communicate clearly, document decisions, work in measurable increments, and build systems that client teams can operate with confidence.</p></div><div className="studio-principles"><span><b>01</b>Clear scope and ownership</span><span><b>02</b>Accessible, durable systems</span><span><b>03</b>Transparent delivery</span></div></div></section>

      <section className="contact shell"><div><p className="section-label">/ Start a conversation</p><h2>TELL US THE<br /><em>MISSION.</em></h2></div><a href="mailto:hello@eightbits.us" className="contact-link">hello@eightbits.us <ArrowUpRight size={30} /></a></section>
      <footer className="shell"><EightbitsMark /><p>Digital products, intelligent systems, and ventures.</p><div><a href="https://www.linkedin.com/company/eight-8-bits/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
