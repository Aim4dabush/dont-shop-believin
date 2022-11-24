//styles
import styles from "./ShippingInput.module.scss";

const ShippingInput = ({
  children,
  classControlOne,
  classControlTwo,
  classStyleOne,
  classStyleTwo,
  id,
  type,
}) => {
  return (
    <div
      className={`${classControlOne} ${
        classControlTwo ? classControlTwo : null
      }`}
    >
      <label htmlFor={id}>{children}</label>
      <input
        className={`${classStyleOne} ${classStyleTwo ? classStyleTwo : null}`}
        id={id}
        name={id}
        type={type}
      />
    </div>
  );
};

export default ShippingInput;
