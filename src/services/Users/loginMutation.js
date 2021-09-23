import api from '../../utils/api';
import { useMutation } from 'react-query';

const loginUser = async (form) => {
  return await api.post('/auth/signin', form);
}

export function useLoginUser() {
  return useMutation('createUser', loginUser);
}