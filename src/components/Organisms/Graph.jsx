import CheckItem from '../Molecules/CheckItem';
import LineGraph from '../Molecules/LineGraph';
import { useState, useEffect } from 'react';
import instance from '../../utils/instance';

const Graph = () => {
  // 都道府県のデータ
  const [prefs, setPrefs] = useState([{ prefCode: 0, prefName: '' }]);
  // 人口構成のデータ
  const [data, setData] = useState([]);

  useEffect(() => {
    if (prefs.length === 1) {
      const fetchData = async () => {
        const res = await instance.get('/api/v1/prefectures');
        setPrefs(res.data.result);
      };
      fetchData();
    }
  }, [prefs.length]);

  // CheckBoxのイベントハンドラ
  const handleChange = async (event) => {
    const checked = event.target.checked;
    const prefCode = parseInt(event.target.value, 10);
    const prefName = prefs.find((item) => item.prefCode === prefCode).prefName;

    //チェックが入ったとき
    if (checked) {
      const res = await instance.get('/api/v1/population/composition/perYear', {
        params: {
          prefCode,
          cityCode: '-', // 市区町村はすべて
        },
      });

      // responseから総人口のデータだけ格納
      const population = res.data.result.data[0].data;

      let value = {};
      value['name'] = prefName;
      value['type'] = 'line';
      value['data'] = [];
      {
        population.map((item) => value['data'].push(item['value']));
      }
      setData([...data, value]);
    }

    // チェックが外れたとき
    if (!checked) {
      setData(
        data.filter((item) => {
          return item['name'] != prefName;
        })
      );
    }
  };

  return (
    <>
      <CheckItem prefData={prefs} onChange={handleChange} />
      <LineGraph data={data} />
    </>
  );
};

export default Graph;
