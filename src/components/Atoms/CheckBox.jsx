const CheckBox = ({ name }) => {
  return (
    <>
      <input type='checkbox' id='Prefecture' name='Prefecture' />
      <label htmlFor='Prefecture'>{name}</label>
    </>
  );
};

export default CheckBox;
