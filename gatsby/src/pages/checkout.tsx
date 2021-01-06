import React, { useContext, useState } from "react";
import Banner from "../components/Banner";
import { OrderContext } from "../components/OrderProvider";

const CheckoutPage: React.FC = () => {
  const [, setOrder] = useContext(OrderContext);
  const [infoSent, setInfoSent] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", address: "" });
  const [errors, setErrors] = useState([]);

  const handleOrderSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let hasErrors = false;
    e.preventDefault();

    const localErrors = [];
    Object.entries(values).forEach(([key, value]) => {
      if (value === "") {
        localErrors.push(`${key} must not be empty`);
      }
    });

    if (localErrors.length > 0) {
      hasErrors = true;
      setErrors(localErrors);
    }

    if (!hasErrors) {
      localStorage.removeItem("tokyoEatsOrder");
      setOrder({});
      setInfoSent(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (infoSent) {
    return (
      <Banner text="We have received your order. Your food will be delivered ASAP!" />
    );
  }

  return (
    <>
      <Banner text="Please provide your information for delivery" />
      <form
        className="border-solid border-2 border-blue-400 rounded-xl p-5 my-4 text-center"
        action=""
      >
        {errors.length > 0 && (
          <fieldset className="m-4 mb-8 grid grid-cols-4 items-center justify-items-center">
            <div />
            <ul className="col-span-3 rounded-xl w-full text-red-500 text-sm border-2 border-red-400 rounded-lg p-2">
              {errors.map((error) => (
                <li key={error.slice(0, error.indexOf(" "))}>{error}</li>
              ))}
            </ul>
          </fieldset>
        )}
        <fieldset className="m-4 grid grid-cols-4 items-center justify-items-center">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Enter your name..."
            className="border-solid border-blue-200 border-2 rounded-xl p-3 mx-4 w-full col-span-3 focus:ring focus:border-blue-400"
            style={{ outline: "none" }}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className="col-span-2 m-4 grid grid-cols-4 items-center justify-items-center">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="And here is your email..."
            className="border-solid border-blue-200 border-2 rounded-xl p-3 mx-4 w-full col-span-3 focus:ring focus:border-blue-400"
            style={{ outline: "none" }}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className="col-span-2 m-4 grid grid-cols-4 items-center justify-items-center">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={values.address}
            placeholder="It's where you live homie..."
            className="border-solid border-blue-200 border-2 rounded-xl p-3 mx-4 w-full col-span-3 focus:ring focus:border-blue-400"
            style={{ outline: "none" }}
            onChange={handleInputChange}
          />
        </fieldset>
        <button
          type="submit"
          className="py-4 px-8 bg-red-400 text-white my-4 rounded-2xl"
          onClick={handleOrderSubmit}
        >
          Place Order
        </button>
      </form>
    </>
  );
};

export default CheckoutPage;
