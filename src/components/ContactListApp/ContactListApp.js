import Header from "../Header/Header";
import AddContactForm from "../AddContactForm/AddContactForm";
import Contacts from "../Contacts/Contacts";
import { useEffect, useReducer, useState } from "react";
import GetContacts from "../../Services/ContactsServices/GetContactsService";

const initialContacts = null;
const reducer = (currentContacts, action) => {
   switch (action.type) {
      case "setContacts": {
         return action.contacts;
      }

      case "addContact": {
         return [...currentContacts, action.contact];
      }

      case "deleteContact": {
         const filtredContacts = currentContacts.filter(
            (contact) => contact.id !== action.id
         );
         return filtredContacts;
      }

      default:
         return currentContacts;
   }
};

const ContactListApp = () => {
   const [contacts, dispatch] = useReducer(reducer, initialContacts);
   const [selectedContactId, setSelectedContactId] = useState(null);

   useEffect(() => {
      setTimeout(() => {
         GetContacts()
            .then(({ data }) => dispatch({ type: "setContacts", contacts: data }))
            .catch((error) => {
               console.log(error);
               alert("ther is a problem with connection!");
            });
      }, 300);
   }, []);

   return (
      <section>
         <Header />
         <main className="container lg:max-w-screen-xl mx-auto px-4">
            <AddContactForm contactId={selectedContactId} contactsDispatcher={dispatch} />
            <Contacts contacts={contacts} contactsDispatcher={dispatch} />
         </main>
      </section>
   );
};

export default ContactListApp;
