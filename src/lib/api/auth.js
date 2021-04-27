import client from './client';

export const signin = ({ email, password }) =>
  client.post('/api/auth/signin', { email, password }).then(response => {
    const { access } = response.data;
    client.defaults.headers.common.Authorization = `Bearer ${access}`;
    return response;
  });

export const signup = ({ email, username, password }) =>
  client
    .post('/api/auth/signup', { email, username, password })
    .then(response => {
      const { access } = response.data;
      client.defaults.headers.common.Authorization = `Bearer ${access}`;
      return response;
    });

export const signout = () => client.get('/api/auth/signout');

export const refresh = () =>
  client.get('/api/auth/refresh').then(response => {
    const { access } = response.data;
    client.defaults.headers.common.Authorization = `Bearer ${access}`;
    return response;
  });
