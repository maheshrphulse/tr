import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <pre className="logo">
          <Link to="/">
            {"["}<span>{"{ : }"}</span>{", "}<span>{"</>"}</span>{"].transFormatter()"}
          </Link>
        </pre>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
