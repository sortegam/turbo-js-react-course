import axios from 'axios';
import { API_BASE_URL, API_AUTH_MASHAPE_KEY } from './config';

axios.defaults.headers.common['X-Mashape-Key'] = API_AUTH_MASHAPE_KEY;

export const getBasicCards = () => axios.get(`${API_BASE_URL}/cards/sets/Basic`);
