import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InfoCard = () => {
  return (
    <div>
      <div className="grid grid-cols-5 lg:grid-cols-9 gap-4">
        <div className="bg-cyan-50 p-4 rounded-lg  lg:col-span-1">
          <Image
            src="/images/house2.svg"
            height={50}
            width={50}
            className="lg:mx-auto"
          />
          <h2 className="font-semibold mt-2">My Studios</h2>
        </div>
        {/* Card */}
        {cards.map((card, i) => (
          <Link
            href={card.link}
            className="bg-white hover:scale-95 transition-all rounded-lg p-4 pb-2 col-span-2"
            key={i}
          >
            <Image
              src={card.titleImg}
              height={50}
              width={50}
              alt={card.title1}
            />
            <div className="flex justify-between mt-2">
              <div>
                <span className="text-slate-400 text-xs">{card.title1}</span>
                <h2 className="font-semibold">{card.value1}</h2>
              </div>
              <div>
                <span className="text-slate-400 text-xs">{card.title2}</span>
                <h2 className="font-semibold">{card.value2}</h2>
              </div>
            </div>
            <Image
              src={card.triangle}
              width={20}
              height={20}
              className="ml-auto"
              alt={card.title2}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;

const cards = [
  {
    id: 1,
    titleImg: '/images/property.svg',
    title1: 'Property Name',
    value1: 'Juliette House',
    triangle: '/images/yellowTri.svg',
    link: '/interfaces/property',
  },
  {
    id: 2,
    titleImg: '/images/members.svg',
    title1: 'Total Members',
    title2: 'Total Units',
    value1: '45',
    value2: '0',
    triangle: '/images/indigoTri.svg',
    link: '/interfaces/incidents',
  },
  {
    id: 3,
    titleImg: '/images/incidents.svg',
    title1: 'Total Incidents',
    title2: 'New Incidents',
    value1: '55',
    value2: '0',
    triangle: '/images/redTri.svg',
    link: '/interfaces/incidents',
  },
  {
    id: 4,
    titleImg: '/images/chat.svg',
    title1: 'Total Message',
    title2: 'New Message',
    value1: '45',
    value2: '0',
    triangle: '/images/blueTri.svg',
    link: '/interfaces/incidents',
  },
];
