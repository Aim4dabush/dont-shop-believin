const ShippingInput = ({
  children,
  controlStyleOne,
  controlStyleTwo,
  inputStyleOne,
  inputStyleTwo,
  id,
  type,
}) => {
  return (
    <div
      className={`${controlStyleOne} ${
        controlStyleTwo ? controlStyleTwo : null
      }`}
    >
      <label htmlFor={id}>{children}</label>
      <input
        className={`${inputStyleOne} ${inputStyleTwo ? inputStyleTwo : null}`}
        id={id}
        name={id}
        type={type}
      />
    </div>
  );
};

export default ShippingInput;
