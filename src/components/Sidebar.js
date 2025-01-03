import React, { useState, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReportIcon from "@mui/icons-material/Report";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import NavbarComponent from "./navbar";
import { useLocation } from "react-router-dom";
import "./sidebar.css";
import { CheckBox } from "@mui/icons-material";
function Sidebar({ children }) {
  const location = useLocation();
  const [hideTitle, setHideTitle] = useState(true);
  const [hideNavSection, setHideNavSection] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  console.log("location", location);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      id: 1,
      icons: <DashboardIcon fontSize="small" />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 2,
      icons: <BorderAllIcon fontSize="small" />,
      title: "Orders",
      path: "/orders",
    },
    {
      id: 3,
      icons: <Inventory2Icon fontSize="small" />,
      title: "Products",
      path: "/product",
    },
    {
      id: 4,
      icons: <SupportAgentIcon fontSize="small" />,
      title: "Customers",
      path: "/customers",
    },
    {
      id: 5,
      icons: <ReportIcon fontSize="small" />,
      title: "Reports",
      path: "/reports",
    },
    {
      id: 6,
      icons: <HomeIcon fontSize="small" />,
      title: "Home",
      path: "/home",
    },
    {
      id: 7,
      icons: <LogoutIcon fontSize="small" />,
      title: "Logout",
      path: "/logout",
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <nav class="navbar navbar-light bg-light justify-content-between">
            {isSmallScreen ? (
              <CheckBox
                onClick={() => setHideNavSection((prev) => !prev)}
                checked={hideNavSection}
              />
            ) : (
              <CheckBox
                onClick={() => setHideTitle((prev) => !prev)}
                checked={hideTitle}
              />
            )}
          </nav>
        </div>
      </div>
      {isSmallScreen ? (
        <div className="mx-4 d-flex ">
          {hideNavSection ? (
            <div
              className="menusection p-1"
              style={{ width: hideTitle ? "80px" : "200px" }}
            >
              <div className=" h-100 w-100 pt-2">
                {menuItems.map((items) => (
                  <a href={items.path} className="link">
                    <div
                      className={`d-flex align-items-center mb-4  gap-2 ${location.pathname === items.path.toLowerCase() ? "activemenuItems" : "menuitems"}`}
                    >
                      <p className="m-0">{items.icons}</p>
                      <p className="m-0">{items.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="contentSection" style={{ width: "100%" }}>
              {children}
            </div>
          )}
        </div>
      ) : (
        <div className="mx-4 d-flex ">
          <div
            className="menusection p-1"
            style={{ width: hideTitle ? "80px" : "200px" }}
          >
            <div className=" h-100 w-100 pt-2">
              {menuItems.map((items) => (
                <a href={items.path} className="link">
                  {hideTitle ? (
                    <div
                      className={`d-flex align-items-center mb-4 gap-2 ${location.pathname === items.path.toLowerCase() ? "activemenuItems" : "menuitems"}`}
                    >
                      <p className="m-0">{items.icons}</p>
                    </div>
                  ) : (
                    <div
                      className={`d-flex align-items-center mb-4 gap-2 ${location.pathname === items.path.toLowerCase() ? "activemenuItems" : "menuitems"}`}
                    >
                      <p className="m-0">{items.icons}</p>
                      <p className="m-0">{items.title}</p>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="contentSection" style={{ width: "100%" }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
