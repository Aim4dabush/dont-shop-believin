const PaymentInput = ({ children, controlStyle, id, inputStyle, type }) => {
  return (
    <div className={controlStyle}>
      <label htmlFor={id}>{children}</label>
      <input className={inputStyle} type={type} name={id} id={id} />
    </div>
  );
};

export default PaymentInput;
