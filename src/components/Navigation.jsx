import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    {
      to: "/",
      label: "Comment",
      className: "bg-blue-700",
    },
    {
      to: "/preprocessing",
      label: "Preprocessing",
      className:
        "hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700",
    },
    {
      to: "/processing",
      label: "Processing",
      className:
        "hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700",
    },
    {
      to: "/validation",
      label: "Validation",
      className:
        "hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700",
    },
  ];

  return (
    <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 start-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Sianida
          </span>
        </NavLink>

        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* Theme Controller */}
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={`block p-2 px-3 text-gray-900 rounded ${
                    location.pathname === item.to
                      ? "bg-blue-700  text-white"
                      : ""
                  }`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
