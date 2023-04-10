import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsBellFill, BsFillQuestionCircleFill } from 'react-icons/bs';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDropdownClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between px-4 py-2 bg-white">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-slate-400 text-sm">
          Welcome back Józef 👋, Let’s get back to managing your properties.
        </p>
      </div>

      <div className="flex items-center gap-6 text-xl">
        <div className="relative" ref={dropdownRef}>
          <Link href="" onClick={handleDropdownClick}>
            <BsBellFill className="text-gray-400" />
            <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0"></div>
          </Link>
          {isDropdownOpen && (
            <div className="bg-white w-60 absolute top-12 p-4 rounded-lg shadow-lg -translate-x-1/2">
              <h3 className="font-bold text-base">Notifications</h3>
              {dropdown.map((item, i) => (
                <div className="flex items-center my-3 gap-3" key={i}>
                  <Image
                    src={item.image}
                    width={32}
                    height={32}
                    alt="incidents"
                  />
                  <Link
                    href="/incidents"
                    className="text-base text-slate-500 hover:text-blue-700 "
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link href="">
          <AiTwotoneSetting className="text-gray-400" />
        </Link>
        <Link href="" className="flex items-center gap-2">
          <BsFillQuestionCircleFill className="text-gray-400" />
          <p className="text-slate-500 text-base">Help</p>
        </Link>
        <Link href="">
          <Image
            src="/images/avatar.png"
            width={32}
            height={32}
            className="w-8 h-8 object-cover"
            alt="avatar"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

const dropdown = [
  {
    id: 1,
    image: '/images/incidents.svg',
    title: '1 New Incident',
  },
  {
    id: 1,
    image: '/images/chat.svg',
    title: '1 New Message',
  },
  {
    id: 1,
    image: '/images/task.svg',
    title: '1 New Task Pending',
  },
];
