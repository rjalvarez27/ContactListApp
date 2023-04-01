import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../Contact.jsx";
import AddContact from "../AddContact.jsx";

export const ContacContex = createContext();

const App = () => {

   const [list, setList] = useState([])
   const  [editing, setEditing] = useState(null)

	const addContact = (contact) => {
        console.log(editing);
         if (editing != null){  
         const newlist= list.filter ((contact,index) => index != editing)
         setList([...newlist,contact])
         console.log(newlist)
         setEditing(null)
         return
        }   
          setList([...list, contact])
       console.log (list)
	};

    const removeContacts = (index) => {        
		setList(list.filter((_, i) => index !== i));        
	};

    const editinContact = (index) => {
      setEditing(index)  
    };
 

	const contextValue = {
		addContact: addContact,
		list: list,		
        removeContacts: removeContacts,
        editinContact:editinContact,
	};
        
    
	return (
		<ContacContex.Provider value={contextValue}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Contact />} />
					<Route path="/addcontact" element={<AddContact />} />
				</Routes>
			</BrowserRouter>
		</ContacContex.Provider>
	);
};

export default App;
