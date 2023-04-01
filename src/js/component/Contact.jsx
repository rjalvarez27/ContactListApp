import React, { useContext } from "react";
import { ContacContex } from "../component/views/App.jsx";
import { useNavigate } from "react-router";





const Contact = () => {
   
    const {removeContacts,list,editinContact}  = useContext(ContacContex);
    const navigate = useNavigate();  

    const handleedit = (index) => {
        console.log("antes de editar")
       editinContact(index)
       console.log("despues de editar")
       navigate("/addcontact")
    }
    
   
    return (
        <div>
        <button onClick={()=>navigate("/addcontact")}> AddNewContact</button>
        <div className=" card w-75 m-auto my-5">
            <h1 className="text-center">Lista de Contactos</h1>
            <h3 className="text-center">Contacto</h3>
            <ul>
                {
                    list.map((contact, index) => {
                        return (
                            <li key = {index}>
                                <div className="text-center">Name: {contact.Fullname} </div>
                                <div className="text-center">Email: {contact.email} </div>
                                <div className="text-center">Phone: {contact.phone}  </div>
                                <div className="text-center">Adress: {contact.address}  </div>
                              <button onClick={() => removeContacts(index)}>borrame</button>
                              <button onClick={()=>handleedit (index)}>editar</button>
                            </li>
                        )
                    })
                }    
            </ul>
          
        </div>
        </div>
    );
};

export default Contact;