import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ModeContext from './ModeContext';

function Navbar() {
    const [darkMode, setDarkMode] = useContext(ModeContext);
    const themeToggle = ()=>{
      localStorage.setItem("mode", darkMode ? "light" : "dark");
      setDarkMode(!darkMode);
    };
    return (
      <nav
        className={
          darkMode
            ? "navbar navbar-dark bg-dark navbar-expand-lg align-items-center"
            : "navbar navbar-light navbar-expand-lg align-items-center"
        }
      >
        <div
          className={
            darkMode
              ? "container bg-dark border-bottom border-2 border-light mb-4"
              : "container border-bottom border-2 border-black mb-4"
          }
        >
          <Link to="/React-Todo/" className="navbar-brand fw-bold fs-2">
            My-Todo
          </Link>
          <div className="controls d-flex gap-3 align-items-center">
            <button className="d-lg-none d-inline" onClick={themeToggle}>
              <i
                className={
                  !darkMode
                    ? "bi bi-moon-stars-fill"
                    : "bi bi-sun-fill text-light"
                }
              ></i>
            </button>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav align-items-center justify-content-between gap-lg-0 gap-2 mb-2 mb-lg-0 w-100">
              <li className="nav-item ms-lg-5">
                <Link to="/React-Todo/today" className="nav-link">
                  Today
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/React-Todo/month" className="nav-link">
                  This Month
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/React-Todo/finish" className="nav-link">
                  Finished Tasks
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center gap-5">
                <button className="d-lg-inline d-none" onClick={themeToggle}>
                  <i
                    className={
                      !darkMode
                        ? "bi bi-moon-stars-fill"
                        : "bi bi-sun-fill text-light"
                    }
                  ></i>
                </button>
                <Link
                  to="/React-Todo/add"
                  className="btn btn-primary d-flex align-items-center justify-content-center"
                >
                  <i className="bi bi-plus fw-bold"></i>New Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;