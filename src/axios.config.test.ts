import './axios.config';
import axios from 'axios';


jest.mock('constants/api', () => ({
  DOMAIN: 'someDomain',
}));

test('axios defaults params', () => {
  expect(axios.defaults.baseURL).toBe('https://someDomain/api/');
  expect(axios.defaults.withCredentials).toBe(true);
});
