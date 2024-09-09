import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  const location = useLocation(); // On utilise useLocation pour connaître la route active

  return (
    <div className="flex items-center justify-between p-4 bg-lime-700">
      <div>
        <ul className="flex gap-3 ml-4">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-white font-bold underline" : "text-gray-200"
              }`}
            >
              Create Employee
            </Link>
          </li>
          <li>
            <Link
              to="/current"
              className={`${
                location.pathname === "/current" ? "text-white font-bold underline" : "text-gray-200"
              }`}
            >
              View Current Employees
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} alt="logo du site" className="h-10" />
      </div>
    </div>
  );
}
