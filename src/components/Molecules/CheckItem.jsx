import CheckBox from '../Atoms/CheckBox';
import styles from '../../styles/CheckItem.module.css';

const CheckItem = ({ prefData, onChange }) => {
  return (
    <div className={styles.container}>
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
