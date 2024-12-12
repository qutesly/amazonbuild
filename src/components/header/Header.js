import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../assets";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from '@mui/icons-material/Logout';
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userSignout } from "../../redux/amazonSlice";

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch()
  const products = useSelector((state) => state.amazon.products);
  const userInfo = useSelector((state) => state.amazon.userInfo);

  const ref = useRef();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);

  const handleLogout = ()=> {
    signOut(auth).then(() => {
      console.log("Successfully signed out")
      dispatch(userSignout())
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
      // An error happened.
    });
  }

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-3 py-4 flex items-center">
        {/* =========== Image start here ========== */}
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>
        {/* =========== Image end here ============== */}
        {/* =========== Deliver start here ========== */}
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-lightText font-light flex flex-col ">
            Deliver to
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Nigeria
            </span>
          </p>
        </div>
        {/* =========== Deliver end here ============ */}
        {/* =========== Search start here =========== */}
        <div className="h-10 rounded-md hidden lg:flex flex-grow relative mr-[1.2rem]">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All<span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul
                ref={ref}
                className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden  bg-white border-[1px] border-amazon_blue text-black p-2 flex-col z-50"
              >
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* =========== Search end here ============= */}
        {/* =========== Signin start here =========== */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            {userInfo ? (
                <p className="text-sm text-gray-100  font-medium">
                  {userInfo.userName}
                </p>
            ) : (
              <p className="text-sm mdl:text-xs text-white md:text-lightText font-light">
                Hello, sign in
              </p>
            )}

            <p className="text-sm font-semibold -mt-1 text-whiteText hidden md:inline-flex">
              Accounts & List{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* =========== Signin end here ============= */}
        {/* =========== Orders start here =========== */}
        <div className="hidden md:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* =========== Orders end here ============= */}
        {/* =========== Cart start here ============= */}
        <Link to="cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute -top-1 left-6 bg-[#f3a847] font-semibold p-1 h-4 text-amazon_blue rounded-full flex items-center justify-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {
          userInfo && (
            <div onClick={handleLogout} className="flex flex-col justify-center items-center headerHover relative">
              <LogoutIcon />
              <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">Log out</p>
            </div>
          )
        }
        {/* =========== Cart end here =============== */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
