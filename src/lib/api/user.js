import client from './client';

// eslint-disable-next-line import/prefer-default-export
export const getMe = () => client.get('/api/users/me');
