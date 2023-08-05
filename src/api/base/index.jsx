import axios from 'axios';
// import { getCookie } from '../../utils/cookie';

// const token = getCookie('token');

export const BASE_URL= axios.create({
    baseURL: "https://ai-jurist-ee79723c4149.herokuapp.com/",
    headers: {
      ContentType: "application/json",
    },
  });