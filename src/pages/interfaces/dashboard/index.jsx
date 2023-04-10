import Image from 'next/image';
import React from 'react';
import InfoCard from '../../../components/InfoCard';
import Charts from '../../../components/Charts';
import Accounting from '../../../components/Accounting';
import DataTable from '../../../components/DataTable';

const Dashboard = () => {
  return (
    <>
      <InfoCard />
      <Charts />
      <Accounting />
      <DataTable />
    </>
  );
};

export default Dashboard;
