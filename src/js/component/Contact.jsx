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
        <div className="container">
        <div className="d-flex justify-content-end">  
        <button onClick={()=>navigate("/addcontact")} className="m-2 btn btn-success"> Add New Contact</button>
        </div>  
        <h1 className="text-center">Lista de Contactos</h1>
        <div className=" card w-75 m-auto my-5">            
            <ul>
                {
                    list.map((contact, index) => {
                        return (
                            <li key = {index}>
                            <div className="container-fluid d-flex flex-row m-2 col-10  ">
                                <div className="col-8" >
                                <div className="text-center">Name: {contact.Fullname} </div>
                                <div className="text-center">Email: {contact.email} </div>
                                <div className="text-center">Phone: {contact.phone}  </div>
                                <div className="text-center">Adress: {contact.address}  </div>
                                </div>
                              <div className="d-flex justify-content-end col-2">
                              <div onClick={() => removeContacts(index)} className="m-2"><i class="fas fa-trash-alt"></i></div>
                              <div onClick={()=>handleedit (index)} className="m-2"><i class="fas fa-pencil-alt"></i></div>                              
                              </div>  
                            </div> 
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