import { useEffect, useState, type JSX } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

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
    registerFormData.handleSubmit();
    event.preventDefault();
  }

  const registerFormData = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      mobileNo: "",
      age: 0,
      address: "",
      country: "",
      pincode: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Please fill the User Name"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(15, "Must be 15 characters or less")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Please fill the Password"),
      email: Yup.string().email("Invalid email address").required("Please fill the Email"),
      mobileNo: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
        .required("Please fill the Phone Number"),
      age: Yup.number()
        .min(10, "Must be at least 10")
        .max(100, "Must be 100 or less")
        .required("Please fill the Age"),
      address: Yup.string().required("Please fill the Address"),
      country: Yup.string().required("Please select the Country"),
      pincode: Yup.string()
        .matches(/^[0-9]{6}$/, "Must be exactly 6 digits")
        .required("Please fill the Pincode"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            onChange={registerFormData.handleChange}
            onBlur={registerFormData.handleBlur}
          />
          {registerFormData.touched.userName &&
          registerFormData.errors.userName ? (
            <div className="text-start text-danger">
              {registerFormData.errors.userName}
            </div>
          ) : null}
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
            onChange={registerFormData.handleChange}
            onBlur={registerFormData.handleBlur}
            required
          />
          {registerFormData.touched.email && registerFormData.errors.email ? (
            <div className="text-start text-danger">
              {registerFormData.errors.email}
            </div>
          ) : null}
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
            onChange={registerFormData.handleChange}
            onBlur={registerFormData.handleBlur}
          />
          {registerFormData.touched.password &&
          registerFormData.errors.password ? (
            <div className="text-start text-danger">
              {registerFormData.errors.password}
            </div>
          ) : null}
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
            onChange={registerFormData.handleChange}
            onBlur={registerFormData.handleBlur}
          />
          {registerFormData.touched.mobileNo &&
          registerFormData.errors.mobileNo ? (
            <div className="text-start text-danger">
              {registerFormData.errors.mobileNo}
            </div>
          ) : null}
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
            onChange={registerFormData.handleChange}
            onBlur={registerFormData.handleBlur}
          />
          {registerFormData.touched.age && registerFormData.errors.age ? (
            <div className="text-start text-danger">
              {registerFormData.errors.age}
            </div>
          ) : null}
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
            onChange={registerFormData.handleChange}
            onBlur={registerFormData.handleBlur}
          />
          {registerFormData.touched.address &&
          registerFormData.errors.address ? (
            <div className="text-start text-danger">
              {registerFormData.errors.address}
            </div>
          ) : null}
        </div>

        <div className="form-group my-2">
          <label htmlFor="country" className="text-start pb-1 w-100">
            Country
          </label>
          <select
            className="form-control"
            id="country"
            name="country"
            required
            onChange={registerFormData.handleChange}
            onBlur={registerFormData.handleBlur}
          >
            {countryList}
          </select>
          {registerFormData.touched.country &&
          registerFormData.errors.country ? (
            <div className="text-start text-danger">
              {registerFormData.errors.country}
            </div>
          ) : null}
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
            onChange={registerFormData.handleChange}
            onBlur={registerFormData.handleBlur}
          />
          {registerFormData.touched.pincode &&
          registerFormData.errors.pincode ? (
            <div className="text-start text-danger">
              {registerFormData.errors.pincode}
            </div>
          ) : null}
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
