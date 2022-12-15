//components
import ShippingInput from "./ShippingInput/ShippingInput";

//styles
import styles from "./Shipping.module.scss";

const Shipping = (props) => {
  const { city, cityError, cityOnBlur, cityOnChange, cityValue } = props.city;
  const { email, emailError, emailOnBlur, emailOnChange, emailValue } =
    props.email;
  const {
    fullName,
    fullNameError,
    fullNameOnBlur,
    fullNameOnChange,
    fullNameValue,
  } = props.fullName;
  const { state, stateError, stateOnBlur, stateOnChange, stateValue } =
    props.state;
  const { street, streetError, streetOnBlur, streetOnChange, streetValue } =
    props.street;
  const { zip, zipError, zipOnBlur, zipOnChange, zipValue } = props.zip;

  //checks for errors and use error styles
  const cityClassName = cityError ? styles.error : null;
  const emailClassName = emailError ? styles.error : null;
  const fullNameClassName = fullNameError ? styles.error : null;
  const stateClassName = stateError ? styles.error : null;
  const streetClassName = streetError ? styles.error : null;
  const zipClassName = zipError ? styles.error : null;

  return (
    <div className={styles.shipping}>
      <h2>Shipping</h2>
      <div className={styles.wrapper}>
        <ShippingInput
          controlStyleOne={styles.inputControl}
          error={fullNameError}
          errorMessage={"Please enter a name!"}
          errorStyle={fullNameClassName}
          handleOnBlur={fullNameOnBlur}
          handleOnChange={fullNameOnChange}
          inputRef={fullName}
          inputStyleOne={styles.input}
          inputStyleTwo={styles.fullName}
          id={"name"}
          type={"text"}
          value={fullNameValue}
        >
          Full Name
        </ShippingInput>
        <ShippingInput
          controlStyleOne={styles.inputControl}
          error={emailError}
          errorMessage={"Please use a valid email!"}
          errorStyle={emailClassName}
          handleOnBlur={emailOnBlur}
          handleOnChange={emailOnChange}
          inputRef={email}
          inputStyleOne={styles.input}
          inputStyleTwo={styles.email}
          id={"email"}
          type={"email"}
          value={emailValue}
        >
          Email
        </ShippingInput>
      </div>
      <ShippingInput
        controlStyleOne={styles.inputControl}
        controlStyleTwo={styles.wide}
        error={streetError}
        errorMessage={"Please enter a street!"}
        errorStyle={streetClassName}
        handleOnBlur={streetOnBlur}
        handleOnChange={streetOnChange}
        inputRef={street}
        inputStyleOne={styles.input}
        inputStyleTwo={styles.street}
        id={"street"}
        type={"text"}
        value={streetValue}
      >
        Street
      </ShippingInput>
      <div className={styles.wrapper}>
        <ShippingInput
          controlStyleOne={styles.inputControl}
          error={cityError}
          errorMessage={"Please enter a city!"}
          errorStyle={cityClassName}
          handleOnBlur={cityOnBlur}
          handleOnChange={cityOnChange}
          inputRef={city}
          inputStyleOne={styles.input}
          id={"city"}
          type={"text"}
          value={cityValue}
        >
          City
        </ShippingInput>
        <div className={styles.inputControl}>
          <label htmlFor="state">State</label>
          <select
            className={`${styles.input} ${stateClassName}`}
            id="state"
            ref={state}
            name="state"
            onBlur={stateOnBlur}
            onChange={stateOnChange}
            value={stateValue}
          >
            <option value="0">Select state:</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          {stateError && (
            <p className={styles.errorText}>Please choose a state!</p>
          )}
        </div>
        <ShippingInput
          controlStyleOne={styles.inputControl}
          error={zipError}
          errorMessage={"Please enter a zip code!"}
          errorStyle={zipClassName}
          handleOnBlur={zipOnBlur}
          handleOnChange={zipOnChange}
          inputRef={zip}
          inputStyleOne={styles.input}
          inputStyleTwo={styles.zip}
          id={"zip"}
          type={"number"}
          value={zipValue}
        >
          Zip Code
        </ShippingInput>
      </div>
    </div>
  );
};

export default Shipping;
