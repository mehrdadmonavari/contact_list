import { useEffect, useState } from "react";
import GetContacts from "../../Services/ContactsServices/GetContactsService";
import PostContact from "../../Services/ContactsServices/PostContactService";

const AddContactForm = ({ contactId, contactsDispatcher }) => {
   const [formValues, setFormValues] = useState({
      name: "",
      email: "",
      phone: "",
   });

   const inputHandler = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      PostContact(formValues)
         .then(({ data }) => contactsDispatcher({ type: "addContact", contact: data }))
         .catch((error) => {
            console.log(error);
            alert("ther is a problem with data base conection!");
         });
      setFormValues({
         name: "",
         email: "",
         phone: "",
      });
   };

   useEffect(() => {
      contactId &&
         GetContacts(contactId)
            .then(({ data }) => setFormValues(data))
            .catch((error) => {
               console.log(error);
               alert("cant fetch selected item data !");
            });
   }, [contactId]);

   return (
      <section>
         <form onSubmit={submitHandler} className="w-full flex flex-col">
            <h2 className="text-lg text-gray-800 font-medium my-5">Add Contact</h2>
            <div className="flex flex-col justify-center items-start gap-y-4">
               <div className="w-full flex flex-col justify-center items-start gap-y-2">
                  <label className="text-gray-600 text-sm">Name</label>
                  <input
                     onChange={inputHandler}
                     type="text"
                     name="name"
                     className="w-full border border-gray-200 px-4 py-2 rounded-lg transition duration-200 focus:outline-none focus:border-blue-500 focus:bg-gray-50"
                     value={formValues.name}
                  />
               </div>
               <div className="w-full flex flex-col justify-center items-start gap-y-2">
                  <label className="text-gray-600 text-sm">Email</label>
                  <input
                     onChange={inputHandler}
                     type="email"
                     name="email"
                     className="w-full border border-gray-200 px-4 py-2 rounded-lg transition duration-200 focus:outline-none focus:border-blue-500 focus:bg-gray-50"
                     value={formValues.email}
                  />
               </div>
               <div className="w-full flex flex-col justify-center items-start gap-y-2">
                  <label className="text-gray-600 text-sm">Phone</label>
                  <input
                     onChange={inputHandler}
                     type="number"
                     name="phone"
                     className="w-full border border-gray-200 px-4 py-2 rounded-lg transition duration-200 focus:outline-none focus:border-blue-500 focus:bg-gray-50"
                     value={formValues.phone}
                  />
               </div>
               <button
                  type="submit"
                  className="bg-white border border-blue-500 text-blue-500 text-base sm:text-lg px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition duration-200 hover:bg-blue-500 hover:text-white">
                  add
               </button>
            </div>
         </form>
      </section>
   );
};

export default AddContactForm;
