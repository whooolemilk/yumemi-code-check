import CheckBox from '../Atoms/CheckBox';

const CheckItem = ({ prefData, onChange }) => {
  return (
    <div>
      {prefData.map((item, i) => (
        <CheckBox
          name={item.prefName}
          value={item.prefCode}
          onChange={onChange}
          key={i}
        />
      ))}
    </div>
  );
};

export default CheckItem;
