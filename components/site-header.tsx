import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/">
          <strong>GRC Secure Labs</strong>
        </Link>

        <nav className="nav-links">
          <Link href="/paths">Paths</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
