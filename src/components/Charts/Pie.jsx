import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const Pie = () => {
  const styles = {
    root: {
      // textAlign: 'center',
      position: 'relative',
      width: '14rem',
      height: '60vh',
      margin: '0 auto',
    },
    overlay: {
      position: 'absolute',
      top: -75,
      right: 40,
      bottom: 0,
      left: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,

      // background: "#FFFFFF33",
      textAlign: 'center',
      // This is important to preserve the chart interactivity
      pointerEvents: 'none',
    },
  };
  const data = [
    {
      id: 'pending',
      label: 'Pending',
      value: 561,
      color: '#2466ff',
    },
    {
      id: 'paid',
      label: 'Paid',
      value: 408,
      color: '#20d6ff',
    },
    {
      id: 'Closed/won',
      label: 'Closed/won',
      value: 324,
      color: '#93f4ff',
    },
  ];
  return (
    <div style={styles.root} className="max-h-64">
      <ResponsivePie
        data={data}
        margin={{ top: -40, right: 40, bottom: 40, left: 40 }}
        innerRadius={0.7}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        // colors={{ scheme: 'nivo' }}
        // colors={{ scheme: 'paired' }}
        colors={(d) => d.data.color}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={8}
        arcLinkLabelsTextOffset={8}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsOffset={-5}
        arcLinkLabelsDiagonalLength={23}
        arcLinkLabelsStraightLength={15}
        arcLinkLabelsThickness={10}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', '1.7']],
        }}
        // legends={[
        //   {
        //     anchor: 'bottom-left',
        //     direction: 'column',
        //     justify: false,
        //     translateX: 0,
        //     translateY: 40,
        //     itemWidth: 40,
        //     itemHeight: 40,
        //     itemsSpacing: -15,
        //     symbolSize: 13,
        //     symbolShape: 'circle',
        //     itemDirection: 'left-to-right',
        //   },
        // ]}
      />
      <div style={styles.overlay}>
        <span className="font-bold">$17K</span>
      </div>
      <div className="-mt-20 space-y-2">
        <div className="flex justify-between text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#2466ff] rounded-full"></div>
            <p>Pending</p>
          </div>
          <div className="flex items-center gap-3">
            <p>2000</p>
            <span className="bg-cyan-50 w-7 h-7 rounded-full text-[10px] font-semibold text-center text-blue-500 leading-7">
              27%
            </span>
          </div>
        </div>
        <div className="flex justify-between text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#20d6ff] rounded-full"></div>
            <p>Paid</p>
          </div>
          <div className="flex items-center gap-3">
            <p>5000</p>
            <span className="bg-cyan-50 w-7 h-7 rounded-full text-[10px] font-semibold text-center text-blue-500 leading-7">
              40%
            </span>
          </div>
        </div>
        <div className="flex justify-between text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#93f4ff] rounded-full"></div>
            <p>Closed/won</p>
          </div>
          <div className="flex items-center gap-3">
            <p>10000</p>
            <span className="bg-cyan-50 w-7 h-7 rounded-full text-[10px] font-semibold text-center text-blue-500 leading-7">
              16%
            </span>
          </div>
        </div>
      </div>
      <button>Manage All Source Types</button>
    </div>
  );
};

export default Pie;
