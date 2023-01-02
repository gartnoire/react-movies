const Header = () => {
  return (
    <header className="header">
      <nav className="nav teal lighten-1">
        <div className="nav-wrapper">
          <a
            href="!#"
            className="brand-logo"
          >
            Catalog Movies
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
          >
            <li>
              <a href="!#">login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export { Header };
