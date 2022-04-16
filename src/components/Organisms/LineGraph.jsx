import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
    text: '総人口推移',
  },

  series: [
    {
      data: [1, 2, 3],
    },
  ],
  xAxis: {
    title: {
      text: '年度',
    },
  },
  yAxis: {
    title: {
      text: '人口数',
    },
  },
};

const LineGraph = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineGraph;
