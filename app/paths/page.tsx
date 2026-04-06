const pathCards = [
  {
    title: "Security Foundations",
    description: "Core security concepts, trust, access, risk, and practical best practices."
  },
  {
    title: "Threat Modeling Foundations",
    description: "Assets, trust boundaries, STRIDE, risk rating, and mitigations."
  },
  {
    title: "Secure Design Foundations",
    description: "Authentication, authorization, APIs, cloud and network design, and data protection."
  },
  {
    title: "Practical GRC Foundations",
    description: "Risk, control mapping, policy gap review, remediation planning, and framework alignment."
  }
];

export default function PathsPage() {
  return (
    <main>
      <div className="page-header">
        <span className="kicker">Learning paths</span>
        <h1>Core paths for the MVP</h1>
        <p className="subtle">
          These are the four path families the platform will use as the main learning structure.
        </p>
      </div>

      <div className="grid-2">
        {pathCards.map((path) => (
          <div className="card" key={path.title}>
            <h2>{path.title}</h2>
            <p className="subtle">{path.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
