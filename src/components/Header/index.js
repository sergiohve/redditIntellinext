import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllColor } from "../../store/slices/colores";
import RedditLight from "../../Assets/redditLight.png";
import RedditDark from "../../Assets/redditDark.jpg";

import "./header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const { color } = useSelector((state) => state.colores);

  const handleChange = (event) => {
    console.log(event.target.checked);
    setChecked(event.target.checked);
  };

  console.log(color);
  React.useEffect(() => {
    dispatch(fetchAllColor(!checked ? "light" : "dark"));
    document.getElementById("body").style.background =
      checked == false ? "#dae0e6" : "#1a1919";
  }, [checked]);

  return (
    <nav
      className={
        !checked
          ? "navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs light"
          : "navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs dark"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {" "}
          <img
            src={!checked ? RedditLight : RedditDark}
            className="image-reddit"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChange}
            checked={checked}
          />
          <label className="form-check-label">Modo Oscuro</label>
        </div>

        <form className="d-flex">
          <div className="input-group mb-3 cont-search">
            <span className="input-group-text input-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              className="form-control input-search"
              placeholder="Search reddit"
            />
          </div>
        </form>
        <div  id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <button
                type="button"
                id="Registrarse"
                className="btn btn-outline-primary"
              >
                Registrarse
              </button>
            </li>
            <li className="nav-item">
              <button type="button" id="Sesion" className="btn btn-primary">
                Iniciar sesión
              </button>
            </li>

            <li className="nav-item dropdown menuRight">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </a>
              <ul className="dropdown-menu menu-closed">
                <li>
                  <a className="dropdown-item" href="#">
                    Monedas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Premium
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Talk
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Comunidades recientes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Explorar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ajustes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Anunciar en Reddit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Más
                  </a>
                </li>
                <li className="sesionMovil">
                  <a className="dropdown-item" href="#">
                    Registrarse o iniciar sesión
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
