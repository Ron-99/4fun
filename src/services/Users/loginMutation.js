import api from '../../utils/api';
import { useMutation } from 'react-query';

const loginUser = async (form) => {
  const { data } = await api.post('/auth/signin', form);
  return data;
}

export function useLoginUser() {
  return useMutation('createUser', loginUser);
}
