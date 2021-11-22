import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";

export default function Register(props) {
  let [errorList, setErrorList] = useState([]);
  let [error, setError] = useState("");
  let [isloading, setisloading] = useState(false);
  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });

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
      setErrorList(validateRespones.error.details);
       console.log(validateRespones.error.message);
      
      
    } else {
      let { data } = await axios.post(
        `https://route-egypt-api.herokuapp.com/signup`,
        user
      );

      if (data.message === "success") {
        setisloading(false);
        props.history.push("/login");
      } else {
        setError(data.message);
        setisloading(false);
      }
    }
  }

  function validateRegiserForm() {
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().min(18).max(80).required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,20}$")),
    });

    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div>
      <div className="w-75 py-4 mx-auto">
        <h2>Register now </h2>

        <form onSubmit={formSubmit}>
          {error && (
            <div className="alert alert-danger m-auto w-75">{error}</div>
          )}

        

          {errorList.map((error, index) =>
            index === errorList.length-5? (
              <div key={index} className="alert alert-danger m-auto py-2 w-75">
               {error.message}
            
              </div>
            ) : (
              ""
            )
          )}
          <div className="py-2">
            <label htmlFor="first_name">frist_name</label>
            <input
              onChange={getuser}
              type="text"
              name="first_name"
              className="form-control"
            />
            <div></div>
            {errorList.map((error, index) =>
            index === errorList.length-5? (
              <div key={index} className="alert alert-danger m-auto py-2 w-75">
                  {error.message}
               
                
              </div>
            ) : (
              ""
            )
          )}
          </div>

          <div className="py-2">
            <label htmlFor="last_name">last_name</label>
            <input
              onChange={getuser}
              type="text"
              name="last_name"
              className="form-control"
            />
           {errorList.map((error, index) =>
            index === errorList.length-4? (
              <div key={index} className="alert alert-danger m-auto py-2 w-75">
               {error.message}
                
              </div>
            ) : (
              ""
            )
          )}
          </div>
          <div className="py-2">
            <label htmlFor="age">age</label>
            <input
              onChange={getuser}
              type="number"
              name="age"
              className="form-control"
            />
           {errorList.map((error, index) =>
            index === errorList.length-3? (
              <div key={index} className="alert alert-danger m-auto py-2 w-75">
               {error.message}
                
              </div>
            ) : (
              ""
            )
          )}
          </div>
          <div className="py-2">
            <label htmlFor="email">email</label>
            <input
              onChange={getuser}
              type="text"
              name="email"
              className="form-control"
            />
           {errorList.map((error, index) =>
            index === errorList.length-2? (
              <div key={index} className="alert alert-danger m-auto py-2 w-75">
               {error.message}
                
              </div>
            ) : (
              ""
            )
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
          {errorList.map((error, index) =>
            index === errorList.length-1? (
              <div key={index} className="alert alert-danger m-auto py-2 w-75">
               {error.message}
                
              </div>
            ) : (
              ""
            )
          )}
          </div>

          <button type="submit" className="btn btn-info m-auto ">
            {isloading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              " register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
