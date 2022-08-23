import axios from 'axios';

export const api_key = '?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR';

export const api = axios.create({
  baseURL: 'https://api.nytimes.com',
});
