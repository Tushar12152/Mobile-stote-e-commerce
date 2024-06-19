import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'https://mobile-store-server-khaki.vercel.app/',
 
});


const useAxiosSecure = () => {
  return axiosSecure;
}

export default useAxiosSecure