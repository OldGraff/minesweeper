import axios from 'axios';
import { DOMAIN } from 'constants/api';


axios.defaults.baseURL = `https://${DOMAIN}/api/`;
axios.defaults.withCredentials = true;
