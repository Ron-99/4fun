import api from '../../utils/api';
import { useMutation } from 'react-query';

const logoutUser = async () => {
  const { data } = await api.post('/auth/signout');
  return data;
}

export function useLogoutUser() {
  return useMutation('logoutUser', logoutUser);
}
