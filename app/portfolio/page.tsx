export default function PortfolioPage() {
  return (
    <main>
      <div className="page-header">
        <span className="kicker">Portfolio</span>
        <h1>Public proof of skill</h1>
        <p className="subtle">
          Learners will publish summary-only or summary-plus-selected-work artifacts from completed labs.
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h2>What an artifact shows</h2>
          <ul className="list">
            <li>lab title and score</li>
            <li>difficulty and skill tags</li>
            <li>standards touched</li>
            <li>selected work sections</li>
            <li>review summary</li>
          </ul>
        </div>

        <div className="card">
          <h2>Visibility modes</h2>
          <ul className="list">
            <li>private</li>
            <li>public summary only</li>
            <li>public summary plus selected work</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
