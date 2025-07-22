import React from 'react';
import Logo from '../../Img/logo.png';
import SearchIcon from '@mui/icons-material/Search';

const LogoSearch = () => {
  return (
    <div className="flex gap-3 items-center">
      <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />

      <div className="flex items-center bg-[rgba(40,52,62,0.07)] rounded-[10px] px-2 py-1">
        <input
          type="text"
          placeholder="#Search"
          className="bg-transparent border-none outline-none text-sm text-black placeholder:text-gray-500"
        />

        <div className="flex items-center justify-center bg-gradient-to-r from-[#6674cc] to-[#b578ff] text-white rounded-[5px] p-1 cursor-pointer">
          <SearchIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
