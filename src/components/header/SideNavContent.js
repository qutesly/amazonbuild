import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SideNavContent = ({ title, one, two, three }) => {
  return (
    <div className="py-8 border-b-[1px] border-b-gray-300">
      <h3 className="font-titleFont text-lg font-semibold mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        <li className="flex items-center justify-between px-6 py-2 hover:bg-zinc-200 cursor-pointer">
          {one}{" "}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between px-6 py-2 hover:bg-zinc-200 cursor-pointer">
          {two}{" "}
          <span>
          <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between px-6 py-2 hover:bg-zinc-200 cursor-pointer">
          {three}{" "}
          <span>
          <KeyboardArrowRightIcon />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;
