import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-lime-700">
      <div>
        <ul className="flex gap-3 ml-4 ">
          <li>
            <Link to="/">Create Employee</Link>
          </li>
          <li>
            <Link to="/about">View Current Employees</Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} alt="" />
        <i></i>
      </div>
    </div>
  );
}
