import { Link } from "react-router-dom";
import style from "./style.module.css";

export function Navbar() {
  return (
    <nav class="navbar bg-dark" data-bs-theme="dark">
      <Link to="/" className={style.link}>
        <h1>Fut Juniores</h1>
      </Link>

      <Link to="/create">
        <button>Cadastrar</button>
      </Link>
    </nav>
  );
}
