import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../Contact.jsx";
import AddContact from "../AddContact.jsx";

export const ContacContex = createContext();

const App = () => {
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState(null);

  const hanledAddContact = (contact) => {    
    if (editing != null) {
      const newlist = list.filter((contact, index) => index != editing);
      setList([...newlist, contact]);      
      setEditing(null);
      return;
    }
    setList([...list, contact]);    
  };

  const hanledRemoveContacts = (index) => {
    setList(list.filter((contact, i) => index !== i));
  };

  const hanledEditingContact = (index) => {
    setEditing(index);
  };

  const contextValue = {
    hanledAddContact: hanledAddContact,
    list: list,
    hanledRemoveContacts: hanledRemoveContacts,
    hanledEditingContact: hanledEditingContact,
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
