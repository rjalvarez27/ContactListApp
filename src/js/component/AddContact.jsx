import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ContacContex } from "../component/views/App.jsx";
import { Link } from "react-router-dom";

const AddContact = () => {
  const initialValue = {
    Fullname: "",
    email: "",
    phone: "",
    address: "",
  };

  const navigate = useNavigate();

  const contex = useContext(ContacContex);
  const { hanledAddContact } = contex;

  const [user, setUser] = useState(initialValue);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const hanledRedirectContact = () => {
    hanledAddContact(user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className=" card w-75 m-auto my-5 border border-0 ">
        <h1 className="text-center">
          <b>Add a New contact</b>
        </h1>
        <h5 className="m-2">Full Name</h5>
        <input
          type="fullname"
          name="Fullname"
          className="form-control "
          placeholder="Full Name"
          onChange={(event) => handleChange(event)}
          value={user.Fullname}
        />
        <h5 className="m-2">Email</h5>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(event) => handleChange(event)}
          value={user.email}
        />
        <h5 className="m-2">Phone</h5>
        <input
          type="phone"
          name="phone"
          className="form-control"
          placeholder="Enter phone"
          onChange={(event) => handleChange(event)}
          value={user.phone}
        />
        <h5 className="m-2">Address</h5>
        <input
          type="address"
          name="address"
          className="form-control"
          placeholder="Enter address"
          onChange={(event) => handleChange(event)}
          value={user.address}
        />
        <button
          type="button"
          onClick={() => hanledRedirectContact()}
          className="btn btn-primary mt-3 "
        >
        <b>save</b>
        </button>

        <Link className="mt-1" to={"/"}>
          <h5>
            <b>or get back to contacts</b>
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default AddContact;
