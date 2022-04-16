import { useEffect, useState } from 'react';
import instance from '../../utils/instance';
import CheckBox from '../Atoms/CheckBox';

const CheckItem = () => {
  const [prefs, setPrefs] = useState([{ prefCode: 0, prefName: '' }]);

  useEffect(() => {
    if (prefs.length === 1) {
      const fetchData = async () => {
        const res = await instance.get('/api/v1/prefectures');
        setPrefs(res.data.result);
      };
      fetchData();
    }
  }, []);
  return (
    <div>
      {prefs.map((item) => (
        <>
          <CheckBox name={item.prefName} />
        </>
      ))}
    </div>
  );
};

export default CheckItem;
