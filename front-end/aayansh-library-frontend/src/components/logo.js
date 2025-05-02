import Navbar from "./navbar";

function Logo({ onNavClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="libraryname">Aayansh library 📚</h1>
        <p className="tagline">A place road to your dream</p>
        <p className="address">Vikash colony, Opposite SBI, Sandalpur road</p>
      </div>

      <Navbar onNavClick={onNavClick} />
    </header>
  );
}

export default Logo;
