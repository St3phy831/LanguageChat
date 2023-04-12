import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <div className="SideBar">
        <nav className="Menu">
          <Link to="/">
            <div className="name">LanguageChat</div>
          </Link>
          <Link to="/">Feed</Link>
          <Link to="/">Create Post</Link>
        </nav>
      </div>
      <div className="routes">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
