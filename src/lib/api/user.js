import client from './client';

export const getMe = () => client.get('/api/users/me');

export const getMeAvatarFile = async () => {
  const response = await client.get('/api/users/me/avatar', {
    responseType: 'arraybuffer',
  });
  const blob = new Blob([response.data], {
    type: response.headers['content-type'],
  });
  const image = await new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
  response.data = image;
  return response;
};
