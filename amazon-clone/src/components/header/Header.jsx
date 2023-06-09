import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { logo } from "../../assets/index";
import { useState } from "react";
import { allItems } from "../../constants/index";
import HeaderBottom from "./HeaderBottom";

function Header() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      {/* navbar */}
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4 ">
        {/* logo */}
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 ">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        {/* location */}
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 ">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Nepal
            </span>
          </p>
        </div>
        {/* search bar */}
        <div className="h-10 rounded-md flex flex-grow relative ">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All
            <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul className=" absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50 ">
                {allItems.map((item) => (
                  <li
                    key={item._id}
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
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
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        {/* SignIn */}
        <div className="flex flex-col items-start justify-center px-2 h-[80%]  border border-transparent hover:border-white cursor-pointer duration-100 ">
          <p className="text-xs text-lightText font-light">Hello, sign in</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        {/* Return & Orders */}
        <div className="flex flex-col items-start justify-center px-2 h-[80%] border border-transparent hover:border-white cursor-pointer duration-100">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* cart */}
        <div className="flex  items-start justify-center relative px-2 h-[80%]  border border-transparent hover:border-white cursor-pointer duration-100">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart{" "}
            <span className="absolute text-xs -top-1  left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              0
            </span>
          </p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
