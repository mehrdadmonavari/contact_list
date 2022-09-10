import DeleteContacts from "../../Services/ContactsServices/DeleteContactService";
import Contact from "../Contact/Contact";

const Contacts = ({ contacts, contactsDispatcher }) => {
   const deleteHandler = (id) => {
      DeleteContacts(id)
         .then((res) => {
            contactsDispatcher({ type: "deleteContact", id });
         })
         .catch((error) => {
            console.log(error);
            alert("cant delete!");
         });
   };

   const renderContacts = () => {
      return (
         <section className="mt-6 shadow-lg">
            {contacts === null ? (
               <div className="text-center text-xl py-4">loading ...</div>
            ) : contacts.length ? (
               <ul className="flex flex-col divide-y">
                  {contacts.map((contact) => (
                     <Contact
                        key={contact.id}
                        contact={contact}
                        onDelete={() => deleteHandler(contact.id)}
                     />
                  ))}
               </ul>
            ) : (
               <div className="text-center text-xl py-4">ther is no contact to show</div>
            )}
         </section>
      );
   };

   return renderContacts();
};

export default Contacts;
