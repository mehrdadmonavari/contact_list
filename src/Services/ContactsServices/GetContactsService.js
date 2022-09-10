import http from "../HttpService";

const GetContacts = (id = null) => {
   let req = "contacts";
   if (id !== null) {
      req += `/${id}`;
   }
   return http.get(req);
};

export default GetContacts;
