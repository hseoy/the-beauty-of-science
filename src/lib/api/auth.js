import client from './client';

export const signin = ({ email, password }) =>
  client.post('/api/auth/signin', { email, password });

export const signup = ({ email, username, password }) =>
  client.post('/api/auth/signup', { email, username, password });

export const signout = () => client.get('/api/auth/signout');

export const refresh = ({ access }) =>
  client.post('/api/auth/refresh', { access });
