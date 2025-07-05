import { useState } from "react";

import { Container } from "./styles";
import Logo from "../Logo/Logo";
import Toggle from "../Toggle/Toggle";

export function Header() {
  const [isActive, setActive] = useState(false);
  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }
  function closeMenu() {
    setActive(false);
  }
  return (
    <Container className="header-fixed">
      <a href="#home" className="logo">
        <Logo />
      </a>
      <nav className={isActive ? "active" : ""}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About me
        </a>
        <a href="#project" onClick={closeMenu}>
          Project
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
      <Toggle onChange={toggleTheme} />
      <div
        aria-expanded={isActive ? "true" : "false"}
        aria-haspopup="true"
        aria-label={isActive ? "Fechar menu" : "Abrir menu"}
        className={isActive ? "menu active" : "menu"}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Container>
  );
}
