import Link from "next/link";

const pillars = [
  {
    title: "Threat Modeling",
    description:
      "Learn assets, trust boundaries, STRIDE, threat prioritization, and mitigation design through realistic case labs."
  },
  {
    title: "Secure Design",
    description:
      "Review authentication, authorization, APIs, segmentation, logging, encryption, and secure-by-design decisions."
  },
  {
    title: "Practical GRC",
    description:
      "Practice risk statements, control mapping, gap analysis, remediation planning, and standards-aware reasoning."
  }
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 32, fontFamily: "Arial, sans-serif" }}>
      <section style={{ padding: "48px 0 24px" }}>
        <p style={{ color: "#2563eb", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Portfolio-Driven Cyber Learning
        </p>
        <h1 style={{ fontSize: "3rem", lineHeight: 1.1, margin: "8px 0 16px" }}>
          Practice GRC, Threat Modeling, and Secure Design like real work.
        </h1>
        <p style={{ maxWidth: 760, color: "#475569", fontSize: 18, lineHeight: 1.7 }}>
          GRC Secure Labs helps learners build practical cybersecurity skill through written lessons,
          quizzes, structured labs, visual hotspot labs, and public portfolio artifacts.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <Link href="/paths">Explore learning paths</Link>
          <Link href="/portfolio">View portfolio model</Link>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {pillars.map((pillar) => (
          <div key={pillar.title} style={{ border: "1px solid #cbd5e1", borderRadius: 16, padding: 20 }}>
            <h3>{pillar.title}</h3>
            <p style={{ color: "#475569", lineHeight: 1.6 }}>{pillar.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
