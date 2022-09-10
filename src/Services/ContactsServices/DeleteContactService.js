import http from "../HttpService";

const DeleteContacts = (id) => {
   let req = `contacts/${id}`;
   return http.delete(req);
};

export default DeleteContacts;
