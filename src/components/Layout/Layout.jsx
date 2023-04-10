import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Rightbar from '../Rightbar/Rightbar';

const Layout = ({ children }) => {
  return (
    // <div>
    //   <Navbar />
    //   <div className="grid grid-cols-12 grid-rows-6">
    //     <div className="z-50 col-span-2 row-span-2 bg-gray-300">
    //       <Sidebar />
    //     </div>
    //     <div className="col-span-8 bg-yellow-300">{children}</div>
    //     <div className="col-span-2 bg-green-500 ">
    //       <Rightbar />
    //     </div>
    //   </div>
    // </div>
    <div className="flex">
      <div className="side  border-r border-gray-200">
        <Sidebar />
      </div>
      <div className="containerr">
        <div className="nav border-b border-slate-200">
          <Navbar />
        </div>

        <div className="m-4 content">{children}</div>
        <div className="right">
          <Rightbar />
        </div>
        <div className="right w-[340px]">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
