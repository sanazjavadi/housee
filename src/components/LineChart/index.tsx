/**
 *
 * LineChart
 *
 */
import React from 'react';

// eslint-disable-next-line object-curly-newline
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

// styles
import { Container } from 'react-bootstrap';

// InterFaces
import useWindowSize from '@Services/hooks/useWindowSize';
import { ILineChart } from './LineChart';

// Hooks

// import styles from './styles/Historical.module.scss';

const data = [
  {
    name: '2016',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2017',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2018',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2019',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2020',
    uv: 280,
    pv: 308,
    amt: 2000,
  },
];

const renderCustomAxisTick = ({ x, y, payload }) => (
  <text style={{ font: '12px semiLightFont' }} x={x - 12} y={y + 19} fill="#666" textAnchor="middle">
    {payload.value}
  </text>
);

const renderCustomYAxisTick = ({ x, y, payload }) => (
  <text style={{ font: '12px semiLightFont' }} x={x - 12} y={y + 2} fill="#666" textAnchor="middle">
    {payload.value}
  </text>
);

// const renderCustomDot = ({ cx, cy }) => (
//   <svg x={cx - 10} y={cy - 10} width={40} height={40} fill="red" viewBox="0 0 1024 1024">
//     <circle cx="50" cy="50" r="400" stroke="black" strokeWidth="3" fill="red" />
//   </svg>
// );
export const CustomLineChart: React.FunctionComponent<ILineChart.IProps> = ({ responsiveSize }) => {
  const size = useWindowSize();

  // const [screenSizeW] = useState<number>(size < 900 ? 300 : 700);

  const sizeHandler = () => {
    // Responsive breakpoint
    const lessThan600 = size < 600;
    const lessThan850 = size < 850;
    const lessThan900 = size < 900;
    const lessThan1200 = size < 1200;

    //  Responsive condition
    if (lessThan600) {
      return responsiveSize[0] || 500;
    }

    if (lessThan850) {
      return responsiveSize[1] || 700;
    }
    if (lessThan900) {
      return responsiveSize[2] || 900;
    }

    if (lessThan1200) {
      return responsiveSize[3] || 700;
    }

    return responsiveSize[4] || 700;
  };

  return (
    <section>
      <Container>
        <LineChart width={sizeHandler()} height={300} data={data}>
          <Line
            strokeWidth={4}
            dot={{
              stroke: '#f6f6f6',
              strokeWidth: 5,
              fill: '#00bbd8',
              r: 8,
              filter: 'drop-shadow( 3px 3px 2px rgba("0, 0, 0, .7"))',
            }}
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
          />
          <Line
            strokeWidth={4}
            dot={{
              stroke: '#f6f6f6',
              strokeWidth: 5,
              fill: '#b9bff7',
              r: 8,
            }}
            type="monotone"
            dataKey="pv"
            stroke="#c3edf3"
          />
          <CartesianGrid x={70} vertical={false} stroke="#e3e9ef" />
          <XAxis
            tickSize={11}
            tick={renderCustomAxisTick}
            allowDecimals={false}
            minTickGap={20}
            padding={{ left: 20, right: 20 }}
            tickLine={false}
            axisLine={false}
            dataKey="name"
          />
          <YAxis
            tick={renderCustomYAxisTick}
            tickSize={14}
            padding={{ top: 30, bottom: 20 }}
            tickLine={false}
            axisLine={false}
          />
        </LineChart>
      </Container>
    </section>
  );
};

export default CustomLineChart;
