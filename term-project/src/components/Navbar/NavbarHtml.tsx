import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in from localStorage
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md border-b-2 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-2 px-4">
        <a
          href="/"
          className="text-xl font-semibold text-gray-800 dark:text-white"
          style={{ textDecoration: "none" }}
        >
          Review Booster
        </a>

        <button
          data-collapse-toggle="navbar-user"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-800"
          aria-controls="navbar-user"
          aria-expanded={isNavbarOpen}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`md:flex md:items-center md:w-auto w-full md:order-1 ${
            isNavbarOpen ? "block" : "hidden"
          }`}
          id="navbar-user"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-2 md:p-0 bg-white md:bg-transparent rounded-lg md:rounded-none dark:bg-gray-800 md:dark:bg-transparent">
            <li>
              <a
                href="/"
                className={`block py-1 px-3 text-sm font-medium rounded-md transition duration-200 ${
                  isActive("/")
                    ? "bg-blue-500 text-white"
                    : "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
                style={{ textDecoration: "none" }}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </a>
            </li>
            {/* <li>
              <a
                href="/products"
                className={`block py-1 px-3 text-sm font-medium rounded-md transition duration-200 ${
                  isActive("/products")
                    ? "bg-blue-500 text-white"
                    : "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
                style={{ textDecoration: "none" }}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block py-1 px-3 text-sm font-medium rounded-md transition duration-200 ${
                  isActive("/contact")
                    ? "bg-blue-500 text-white"
                    : "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
                style={{ textDecoration: "none" }}
              >
                Contact
              </a>
            </li> */}

            {/* Conditionally show login button or avatar */}
            {userEmail ? (
              <li className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {userEmail.charAt(0).toUpperCase()}
                </div>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLoginClick}
                  className="block py-1 px-3 text-sm font-medium rounded-md text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
