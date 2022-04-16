import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineGraph = ({ data }) => {
  console.log(data);
  const options = {
    chart: {
      defaultSeriesType: 'line',
    },
    title: {
      text: '総人口推移',
    },
    series:
      data.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : data,
    xAxis: {
      title: {
        text: '年度',
      },
      gridLineWidth: 1,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
      gridLineWidth: 0.5,
      tickInterval: 100000,
      lineWidth: 1,
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    plotOptions: {
      series: {
        pointStart: 1965,
        pointInterval: 5,
      },
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineGraph;
