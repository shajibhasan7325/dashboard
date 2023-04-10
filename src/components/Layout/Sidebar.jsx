import React, { useEffect, useState } from 'react';
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine,
} from 'react-icons/ri';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi/';
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  useProSidebar,

  //useProSidebar
} from 'react-pro-sidebar';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import { CgMenuGridR } from 'react-icons/cg';
import {
  AiTwotonePropertySafety,
  AiFillFire,
  AiOutlineLogout,
  AiFillDollarCircle,
} from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import {
  MdOutlineBusinessCenter,
  MdSwitchAccount,
  MdReceiptLong,
} from 'react-icons/md';
import { FcDocument } from 'react-icons/fc';
import { TbMessages } from 'react-icons/tb';
import { BiCalendar, BiTask } from 'react-icons/bi';
import {
  RiNewspaperLine,
  RiPaintBrushFill,
  RiEditBoxFill,
} from 'react-icons/ri';
import { GiMoneyStack } from 'react-icons/gi';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';

import GImg from '../../../public/images/Group 37291.png';
import Link from 'next/link';
import { HiOutlineDocumentText } from 'react-icons/hi';

const menuItemStyles = {
  root: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#82858E',
    margin: '0 auto',
  },
  icon: {
    color: '#8A8E97',
  },
  SubMenuExpandIcon: {
    color: '#8A8E97',
  },
  subMenuContent: {},
  button: {
    color: '#000',

    '&:hover': {
      backgroundColor: '#017EFB !important',
      borderRadius: '10px',
      color: '#fff',
    },
  },
};

function Sidebars() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } =
    useProSidebar();

  const [width, setWidth] = useState('');
  const getSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', getSize);
    if (width < 992) {
      collapseSidebar();
    }
    return () => {
      window.removeEventListener('resize', getSize);
    };
  }, [width]);

  // const [toggled, setToggled] = useState(false);

  // const handleCollapsedChange = () => {
  //   setCollapsed(!collapsed);
  // };
  // const handleToggleSidebar = (value) => {
  //   setToggled(value);
  // };

  return (
    <div className="sidebar">
      <Sidebar
      // className={`app ${toggled ? 'w-1/2' : 'w-auto'}`}

      // style={{ position: 'absolute' }}
      // collapsed={() => collapseSidebar()}
      // toggled={toggled}
      // breakPoint="lg"
      // handleToggleSidebar={handleToggleSidebar}
      // handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={() => collapseSidebar()}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={() => collapseSidebar()}
              >
                <div
                  style={{
                    padding: '9px',
                    // textTransform: "uppercase",
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                  }}
                >
                  <Image
                    src={logo}
                    width={160}
                    height={40}
                    style={{ objectFit: 'cover' }}
                    alt="Logo"
                  />
                </div>
              </MenuItem>
            )}
          </Menu>

          <Menu menuItemStyles={menuItemStyles}>
            {/* <>
              <MenuItem
                icon={<CgMenuGridR />}
                component={<Link href="/dashboard" />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<AiTwotonePropertySafety />}
                component={<Link href="/property" />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<IoMdContacts />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<FcDocument />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<AiFillFire />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<TbMessages />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<BiCalendar />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<IoMdContacts />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<BiTask />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<RiNewspaperLine />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
              <MenuItem
                icon={<AiOutlineLogout />}
                // onClick={handleCollapsedChange}
              ></MenuItem>
            </> */}

            <div className="bg-white">
              <MenuItem
                icon={<CgMenuGridR />}
                component={<Link href="/interfaces/dashboard" />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                component={<Link href="/interfaces/property" />}
                icon={<AiTwotonePropertySafety />}
              >
                Property
              </MenuItem>
              <MenuItem icon={<IoMdContacts />}>Members</MenuItem>
              <SubMenu
                defaultOpen
                label={'Accounting'}
                icon={<MdOutlineBusinessCenter />}
              >
                <MenuItem icon={<MdSwitchAccount />}>General Account </MenuItem>
                <MenuItem icon={<CgMenuGridR />}>Rental Dashboard</MenuItem>
                <MenuItem icon={<MdReceiptLong />}>Members Payment</MenuItem>
                <MenuItem icon={<MdReceiptLong />}>Members Invoice</MenuItem>
                <MenuItem icon={<MdReceiptLong />}>Property Invoice</MenuItem>
                <MenuItem icon={<RiPaintBrushFill />}>Suppliers</MenuItem>
                <MenuItem icon={<RiEditBoxFill />}>Contracts</MenuItem>
                <MenuItem icon={<AiFillDollarCircle />}>
                  Tresory Cashflow
                </MenuItem>
                <MenuItem icon={<GiMoneyStack />}>Fundraising</MenuItem>
                <MenuItem icon={<BsFillCreditCard2BackFill />}>Debit</MenuItem>
                <MenuItem icon={<BsFillCreditCard2BackFill />}>Credit</MenuItem>
              </SubMenu>
              <MenuItem icon={<HiOutlineDocumentText />}>Document</MenuItem>
              <MenuItem icon={<AiFillFire />} suffix={<Zero />}>
                Incidents
              </MenuItem>

              <MenuItem icon={<TbMessages />} suffix={<Zero />}>
                Messages
              </MenuItem>
              <MenuItem icon={<BiCalendar />}>Agenda</MenuItem>
              <MenuItem icon={<IoMdContacts />}>Meetings</MenuItem>
              <MenuItem icon={<BiTask />}>Tasks</MenuItem>
              <MenuItem icon={<RiNewspaperLine />}>News</MenuItem>
              <div className="px-3 py-6">{!collapsed && <Card />}</div>
              <MenuItem icon={<AiOutlineLogout />}>Logout</MenuItem>
            </div>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;

export const Zero = () => {
  return (
    <div className="rounded-full bg-[#017EFB]  w-5 h-5 p-2 text-sm text-center text-white m-auto flex justify-center items-center">
      0
    </div>
  );
};

export const Card = () => {
  return (
    <div className=" rounded-2xl bg-[#F3F9FF] py-3 flex flex-col justify-center items-center text-center mt-[50px] ">
      <Image
        src={GImg}
        width={100}
        height={100}
        className="-mt-[60px]"
        alt="Card Image"
      />
      <h4 className=" text-[#000000] text-lg font-semibold">Go Premium</h4>
      <p className=" text-[#5B5D63] text-sm mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className=" text-white bg-[#017EFB] rounded-lg px-5 py-1 text-md">
        Update Now
      </button>
    </div>
  );
};
