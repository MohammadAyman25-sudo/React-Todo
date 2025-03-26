import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg align-items-center">
        <div className="container border-bottom border-2 border-black mb-4">
          <Link to="/" className="navbar-brand fw-bold fs-2">
            My-Todo
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav align-items-center justify-content-between gap-lg-0 gap-2 mb-2 mb-lg-0 w-100">
              <li className="nav-item ms-lg-5">
                <Link to="/today" className="nav-link">
                  Today
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/month" className="nav-link">
                  This Month
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/finish" className="nav-link">
                  Finished Tasks
                </Link>
              </li>
              <li className="nav-item" id="addTask">
                <Link
                  to="/add"
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