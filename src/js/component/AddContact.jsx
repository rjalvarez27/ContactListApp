import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ContacContex } from "../component/views/App.jsx"
import { Link } from "react-router-dom";


const AddContact = () => {

  const initialValue = {
    Fullname: "",
    email: "",
    phone: "",
    address: "",
  };

  const [user, setUser] = useState(initialValue);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });

  };

  const navigate = useNavigate();

  const contex = useContext(ContacContex);

  const { addContact } = contex;

  const redirectContact = () => {
    addContact(user);
    navigate("/");    
  };
  
 
    return (

    <div className=" card w-75 m-auto my-5">
      <h1>Add a New contact</h1>
      <h3>Full Name</h3>

      <input type="fullname" name="Fullname"
        className="form-control" placeholder="Username"
        
        onChange={(event) => handleChange(event)}
        value={user.Fullname}
      />

      <h3>Email</h3>

      <input type="email" name="email"
        className="form-control" placeholder="Username"
       
        onChange={(event) => handleChange(event)}
        value={user.email}
      />

      <h3>Phone</h3>

      <input type="phone" name="phone"
        className="form-control" placeholder="Username"
        
        onChange={(event) => handleChange(event)}
        value={user.phone}
      />

      <h3>Address</h3>

      <input type="address" name="address"
        className="form-control" placeholder="Username"
       
        onChange={(event) => handleChange(event)}
        value={user.address}
      />

      <button type="button" onClick={() => redirectContact()} className="btn btn-primary">save</button>
      
      <Link to={"/"}>or get back to contacts</Link>
    </div>
  );
};

export default AddContact;