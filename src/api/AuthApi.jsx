import { BASE_URL } from "./base";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert';




export const register = (data, navigate) => {

  let response = BASE_URL.post('users/', data);

  return response

};



export const login = (data) => {
  //200 

  return BASE_URL.post('login-user/', data)



}
// qwerty@gmail.com
// qwerty
