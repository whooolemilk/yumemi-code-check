const CheckBox = ({ name, value, onChange }) => {
  return (
    <div>
      <input type='checkbox' name={name} value={value} onChange={onChange} />
      <label htmlFor={value}>{name}</label>
    </div>
  );
};

export default CheckBox;
