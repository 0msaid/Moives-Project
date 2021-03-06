import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
export default function Login(props) {
  let [errorList, setErrorList] = useState([]);
  let [error, setError] = useState("");
  let [isloading, setisloading] = useState(false);
  let [user, setuser] = useState({ email: "", password: "" });

  function getuser(e) {
    let myuser = { ...user };
    myuser[e.target.name] = e.target.value;

    setuser(myuser);
  }
  async function formSubmit(e) {
    e.preventDefault();
    setisloading(true);
    let validateRespones = validateRegiserForm();

    if (validateRespones.error) {
      setisloading(false);
      let errorListInput= [...errorList];
      for (let error of validateRespones.error.details) {
        errorListInput[error.path] = error.message;
      }
      setErrorList(errorListInput);
  

    } else {
      let { data } = await axios.post(
        `https://route-egypt-api.herokuapp.com/signin`,
        user
      );

      if (data.message === "success") {
        localStorage.setItem("userToken", data.token);
        props.getUserInfo();
        setisloading(false);
        props.history.push("/home");
      } else {
        setError(data.message);
        setisloading(false);
      }
    }
  }

  function validateRegiserForm() {
    let schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,20}$")),
    });

    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div>
      <div className="w-75 py-4 mx-auto">
        <h2 className="text-center">Login now </h2>

        <form onSubmit={formSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="py-2">
            <label htmlFor="email">email</label>
            <input
              onChange={getuser}
              type="text"
              name="email"
              className="form-control"
            />
            {errorList.email && (
              <div className="alert alert-danger m-auto w-75">
                {errorList.email}
              </div>
            )}
          </div>
          <div className="py-2">
            <label htmlFor="password">password</label>
            <input
              onChange={getuser}
              type="password"
              name="password"
              className="form-control"
            />
            {errorList.password && (
              <div className="alert alert-danger m-auto w-75">
              password is not allowed to be empty or not match, You must write more than 6 numbers or letters 
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-info mt-2 text-center ">
            {isloading ? <i className="fas fa-spinner fa-spin"></i> : " login"}
          </button>
        </form>
      </div>
    </div>
  );
}
