import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "200px" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkto="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkto="#home"></use>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-post" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkto="#speedometer2"></use>
              </svg>
              Create Post
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <Link className="dropdown-item" to="#">
                New project...
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
