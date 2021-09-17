import api from '../../utils/api';
import { useMutation } from 'react-query';

const createUser = async (form) => {
  const { data } = await api.post('/auth/signup', form);
  return data;
}

export function useCreateUser() {
  return useMutation('createUser', createUser);
}
