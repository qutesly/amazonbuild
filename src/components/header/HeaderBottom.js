import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();

  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);

  return (
    <div className="w-full h-[36px] px-4 bg-amazon_light flex items-center">
      <ul className="flex items-center text-center text-whiteText text-sm tracking-wide">
        <li
          onClick={() => setSidebar(!sidebar)}
          className="flex items-center mr-3 headerHover"
        >
          <MenuIcon /> All
        </li>
        <li className="mr-3 headerHover hidden md:inline-flex">Today's Deal</li>
        <li className="mr-3 headerHover hidden md:inline-flex">
          Customer Services
        </li>
        <li className="mr-3 headerHover hidden md:inline-flex">Gifts Cards</li>
        <li className="mr-3 headerHover hidden md:inline-flex">Registry</li>
        <li className="mr-3 headerHover hidden md:inline-flex">Sell</li>
      </ul>
      {/* ============ End of List ========== */}
      {/* ============ Start of Sidebar ===== */}
      {sidebar && (
        <div className="w-full h-screen fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] md:w-[350px] h-full bg-whiteText border-[1px] border-black"
            >
              <div className="w-full py-2 px-6 bg-amazon_light text-whiteText flex items-center">
                {userInfo ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={userInfo.image}
                    alt="UserImg"
                  />
                ) : (
                  <AccountCircleIcon />
                )}
                {userInfo ? (
                  <h3 className="ml-3 font-titleFont font-semibold text-lg tracking-wide">
                    {userInfo.userName}
                  </h3>
                ) : (
                  <h3 className="ml-3 font-titleFont font-semibold text-lg tracking-wide">
                    Hello, Sign in
                  </h3>
                )}
              </div>

              {/* ========== Content & Devices starts here ========== */}
              <div className="w-full h-full overflow-y-scroll">
                <SideNavContent
                  title="Digital Content & Device"
                  one="Amazon Music"
                  two="Kindle E-readers & Books"
                  three="Amazon Appstore"
                />
                <SideNavContent
                  title="Shop By Departments"
                  one="Electronics"
                  two="Computers"
                  three="Smart Home"
                />
                <SideNavContent
                  title="Progress & Features"
                  one="Gift Cards"
                  two="Amazon Live"
                  three="International Shopping"
                />
                <SideNavContent
                  title="Help & Settings"
                  one="Your Account"
                  two="Customer Care"
                  three="Contact Us"
                />
              </div>
              <span
                onClick={() => setSidebar(false)}
                className="absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black bg-gray-200  hover:bg-red-500 hover:text-whiteText cursor-pointer duration-200 flex items-center justify-center"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* ============ End of Sidebar =========== */}
    </div>
  );
};

export default HeaderBottom;
