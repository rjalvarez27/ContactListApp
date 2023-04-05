import React, { useContext } from "react";
import { ContacContex } from "../component/views/App.jsx";
import { useNavigate } from "react-router";

const Contact = () => {
  const { hanledRemoveContacts, list, hanledEditingContact } = useContext(ContacContex); 

  const navigate = useNavigate();

  const hanledEdit = (index) => {    
    hanledEditingContact(index);
      navigate("/addcontact");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <button
          onClick={() => navigate("/addcontact")}
          className="m-2 btn btn-success">         
          Add New Contact
        </button>
      </div>
      <h1 className="text-center">Lista de Contactos</h1>
      <div className=" card w-75 m-auto my-5">
        <ul className="list-group list-group-flush border rounded">
          {list.map((contact, index) => {
            return (
              <li className="list-group-item p-2"  key={index}>
                <div className="d-flex mb-3 gap-2">
                  <div className="col-3">
                  <img src="https://picsum.photos/200/300.jpg" className="m-3 rounded-circle" width="150" height="130" ></img>      
                  </div>          
                  <div className="d-flex row  col-6 ">
                    <h2 className="text-dark">{contact.Fullname} </h2>
                    <div className="text-secondary"><i class="fas fa-map-marker-alt"></i>  {contact.address} </div>
                    <div className="text-secondary"><i class="fas fa-phone"></i>  {contact.phone} </div>
                    <div className="text-secondary"><i class="fas fa-envelope"></i>  {contact.email}</div>                             
                  </div>                                
                  <div className="d-flex justify-content-end col-2 m-2">
                    <div onClick={() => hanledEdit(index)} className="m-2">
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    <div onClick={() => hanledRemoveContacts(index)} className="m-2">          
                    <i className="fas fa-trash-alt"></i>          
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
