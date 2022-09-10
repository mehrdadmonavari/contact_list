import http from "../HttpService";

const PostContact = (contact) => {
   let req = "contacts";
   return http.post(req, contact);
};

export default PostContact;
