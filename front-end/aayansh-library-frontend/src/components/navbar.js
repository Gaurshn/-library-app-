function Navbar({ onNavClick }) {
  return (
    <nav className="header-right">
      <a
        href=" "
        onClick={(e) => {
          e.preventDefault();
          onNavClick("home");
        }}
      >
        Home
      </a>
      <a
        href=" "
        onClick={(e) => {
          e.preventDefault();
          onNavClick("contact");
        }}
      >
        Contact
      </a>
      <a
        href=" "
        onClick={(e) => {
          e.preventDefault();
          onNavClick("register");
        }}
      >
        Register
      </a>
      <a
        href=" "
        onClick={(e) => {
          e.preventDefault();
          onNavClick("login");
        }}
      >
        Login
      </a>
    </nav>
  );
}

export default Navbar;
