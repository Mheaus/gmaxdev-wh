import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex h-12 bg-lime-700">
      <ul className="flex gap-3">
        <li>
          <Link to="/">Create Employee</Link>
        </li>
        <li>
          <Link to="/about">View Current Employees</Link>
        </li>
      </ul>
    </div>
  );
}
