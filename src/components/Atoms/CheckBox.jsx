const CheckBox = ({ name, value, onChange }) => {
  return (
    <>
      <input type='checkbox' name={name} value={value} onChange={onChange} />
      <label htmlFor={value}>{name}</label>
    </>
  );
};

export default CheckBox;
