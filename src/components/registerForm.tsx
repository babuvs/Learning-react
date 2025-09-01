import { useEffect, useState, type JSX } from "react";

export default function RegisterForm() {
  const [countryList, setCountryList] = useState<JSX.Element[]>([]);

  function getCountrys() {
    return ["India", "USA", "UK", "Canada", "Australia"];
  }

  useEffect(() => {
    const countryList = getCountrys();
    const countryListOPtions = countryList.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ));
    setCountryList(countryListOPtions);
  }, []);

  function handleSubmit(event: any) {
    const form = event.target;
    const elements = form.elements;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    Object.keys(formJson).forEach((key) => {
      const element = elements[key];
      if (element?.validationMessage) {
        alert(element?.validationMessage);
      }
    });
    event.preventDefault();
    const isvalid = form.checkValidity();
    if (!isvalid) {
      return false;
    }
    return true;
  }

  return (
    <div className="card w-25 m-auto my-5">
      <form
        name="registerForm"
        onSubmit={handleSubmit}
        className="p-5"
        noValidate
      >
        <div className="form-group my-2">
          <label htmlFor="userName" className="text-start pb-1 w-100">
            User Name
          </label>
          <input
            name="userName"
            type="text"
            className="form-control"
            id="userName"
            placeholder="User Name"
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="email" className="text-start pb-1 w-100">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password" className="text-start pb-1 w-100">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
            minLength={8}
            maxLength={16}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="mobileNo" className="text-start pb-1 w-100">
            Phone Number
          </label>
          <input
            type="tel"
            name="mobileNo"
            className="form-control"
            id="mobileNo"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="age" className="text-start pb-1 w-100">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            id="age"
            placeholder="Age"
            required
            min={10}
            max={100}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="address" className="text-start pb-1 w-100">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="Address"
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="country" className="text-start pb-1 w-100">
            Country
          </label>
          <select className="form-control" id="country" name="country" required>
            {countryList}
          </select>
        </div>
        <div className="form-group my-2">
          <label htmlFor="pincode" className="text-start pb-1 w-100">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            className="form-control"
            id="pincode"
            placeholder="Pincode"
            required
            maxLength={6}
          />
        </div>
        <div className="my-1">
          <button type="submit" className="btn btn-primary mb-2">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
