// Author: Kenil Patel, Jay Patel, Tathya Kapadia

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import collabHub from "../../assets/collabhub.svg";
// import { useAuth } from "../../context/AuthContext";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  //   const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //   const typedUser = user as {
  //     avatar_url: string;
  //     name: string;
  //     login: string;
  //   } | null;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white border-gray-200 border-b-2 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3">
            {/* <img src={collabHub} className="h-10" alt="CollabHub Logo" /> */}
          </a>
          {true ? (
            <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 ">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="dropdownDividerButton"
                aria-expanded={isOpen}
                onClick={toggleDropdown}
                data-dropdown-toggle="dropdownDivider"
              >
                <span className="sr-only">Open user menu</span>
                {true && (
                  <img
                    className="w-8 h-8 rounded-full"
                    src={"         "}
                    alt="user photo"
                  />
                )}
              </button>
              <div
                className={`${
                  isOpen ? "absolute" : "hidden"
                } z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="dropdownDivider"
                style={{ top: "100%", left: -50, width: "200px" }}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {"Krutik"}
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    {true}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="dropdownDividerButton">
                  <li>
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>

                  <li>
                    <a
                      href="/chat"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Chat
                    </a>
                  </li>
                  <li>
                    <a
                      href="/user-projects"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Your Projects
                    </a>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white mx-auto my-2 border-blue-500 border-2 rounded"
                      onClick={() => console.log()}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => navigate("/login")}
              >
                Get started
              </button>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isNavbarOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isNavbarOpen ? "block" : "hidden"
            }`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className={`block py-2 px-3 text-sm rounded md:p-0 ${
                    isActive("/")
                      ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className={`block py-2 px-3 text-sm rounded md:p-0 ${
                    isActive("/faqs")
                      ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  Faqs
                </a>
              </li>
              <li>
                <a
                  href="/developers"
                  className={`block py-2 px-3 text-sm rounded md:p-0 ${
                    isActive("/developers")
                      ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className={`block py-2 px-3 text-sm rounded md:p-0 ${
                    isActive("/projects")
                      ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className={`block py-2 px-3 text-sm rounded md:p-0 ${
                    isActive("/contact-us")
                      ? "bg-blue-700 text-white md:bg-transparent md:text-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
