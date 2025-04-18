import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link
    to={to}
    className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700"
  >
    {children}
  </Link>
);
