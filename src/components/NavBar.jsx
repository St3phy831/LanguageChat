import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const SideBar = () => {
  return (
    <div>
      <div className="SideBar">
        <nav className="Menu">
          <Link to="/">
            <span className="name">LanguageChat</span>
          </Link>
          <div>
            <Link to="/feed">Feed</Link>
            <Link to="/create">Create Post</Link>
          </div>
        </nav>
      </div>
      <div className="routes">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
