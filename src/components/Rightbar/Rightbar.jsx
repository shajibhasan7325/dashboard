import { AiOutlineArrowRight } from "react-icons/ai";
import Calendar from "./Calendar";
import Image from "next/image";
import TowButton from "../TowButton";
import { BsThreeDots } from "react-icons/bs";
import sap from "../../../public/images/sap.svg";
import A from "../../../public/images/a.svg";
import B from "../../../public/images/b.svg";
import C from "../../../public/images/c.svg";
import D from "../../../public/images/D.svg";
const Rightbar = () => {
  return (
    <div>
      <div className="p-4 bg-white">
        {/* overview */}
        <h3 className="mb-4 text-[20px] font-semibold">Overview</h3>

        <div className="bg-white drop-shadow-lg rounded-lg py-[30px] px-[25px]">
          <h2 className="text-2xl font-bold ">27 May 2023</h2>
          <p className=" text-[#82858E] text-base">Next payment date</p>
          <RightbarText text1="Tasks Waiting" text2="3" />
          <div className="flex items-center gap-2 text-lg text-blue-400">
            <a href="/">View all Tasks </a>
            <AiOutlineArrowRight />
          </div>
          <h2 className=" text-[#7D7D7D] text-base mt-2">Payments Waiting</h2>
          <RightbarText text1="Member Units" text2="3 Units" />
          <RightbarText text1="Invoices" text2="5" />
        </div>

        <h2 className=" py-10  text-black font-[500]">My Calendar</h2>

        {/* calendar */}

        <Calendar />

        <div className="p-3 mt-4 bg-white rounded-lg drop-shadow-lg">
          <div className="">
            <TowButton />
          </div>
          <div className="flex items-center gap-3 -mt-3">
            <Image src="/images/network.svg" width={50} height={50} />

            <div>
              <p className=" text-[14px] text-[#82858E]">Total Rent Income</p>
              <div className="flex items-center justify-between ">
                <h2 className=" text-2xl font-bold text-[#000]">200,000</h2>
                <Image src="/images/network.svg" width={25} height={25} />
              </div>
            </div>
          </div>
        </div>
        <h2 className=" py-10 text-[20px] text-black font-[500]">
          Total Cash Flow
        </h2>
        <div className="overview-card px-[15px] py-[10px]">
          <div className="">
            <TowButton />
          </div>
          <div className="flex items-center justify-between ">
            <div>
              {/* progress bar circle */}
              <h3>Cash In</h3>
              <h3>20,000</h3>
            </div>

            <h2>VS</h2>

            <div>
              {/* progress bar circle */}
              <h3>Cash Out</h3>
              <h3>20,000</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Current Balance */}
      <div className="p-5 bg-white rounded-lg drop-shadow-lg">
        <div className="overview-card my-3 bg-gradient-to-r from-[#4764FF] to-[#747db3] py-[10px] px-[15px] w-[260]">
          <div className="flex items-center justify-between">
            <p className="text-lg text-white">Current Balance</p>
            <div className="flex items-center justify-between ">
              <TowButton />
              <BsThreeDots color="#fff" />
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <h3 className=" text-[28px] text-white">200,000</h3>
            <Image src={sap} width={70} height={60} />
          </div>
        </div>
        <p className=" text-[#82858E] my-5 text-[16px] font-semibold">
          Latest Transactions
        </p>
        <Transactions
          icon={A}
          title1="Members Payment"
          title2="Today, 19:21 John Doe"
          title3="+154.50"
          title4="in"
          color="text-[#0DDFA4]"
        />
        <Transactions
          icon={B}
          title1="Property Payment"
          title2="23, Jun, 13:06"
          title3="+454.50"
          title4="out"
          color="text-[#FF5762]"
        />
        <Transactions
          icon={C}
          title1="Suppliers Payment"
          title2="03, July, 3:06"
          title3="+154.50"
          title4="out"
          color="text-[#FF5762]"
        />
        <Transactions
          icon={D}
          title1="Other Payment"
          title2="03, July, 3:06"
          title3="+154.50"
          title4="out"
          color="text-[#FF5762]"
        />

        <div className="flex items-center justify-center gap-2 text-[16px] text-blue-400">
          <a href="/">See all Trasactions</a>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

export const RightbarText = ({ text1, text2 }) => {
  return (
    <div className="flex items-center py-4 gap-x-4">
      <div className=" w-1 h-10 bg-[#4318FF] rounded-lg"></div>
      <div>
        <h3 className=" text-[20px] font-[500]">{text1}</h3>
        <p className=" text-[#82858E] text-[16px]">{text2}</p>
      </div>
    </div>
  );
};

export const Transactions = ({
  icon,
  title1,
  title2,
  title3,
  title4,
  color,
}) => {
  return (
    <div className="flex items-center justify-between my-2">
      <div className="flex items-center gap-3">
        <Image src={icon} width={36} height={36} alt="img" />
        <div>
          <p className=" text-[16px] text-[#000] font-semibold">{title1}</p>
          <p className=" text-[13px] text-[#A3AED0]">{title2}</p>
        </div>
      </div>
      <div className={`${color}`}>
        <p className=" text-[16px]">{title3}</p>
        <p className=" text-[13px] flex justify-end">{title4}</p>
      </div>
    </div>
  );
};
