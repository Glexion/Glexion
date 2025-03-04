import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">MyBrowser</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/settings" className="mx-2">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
