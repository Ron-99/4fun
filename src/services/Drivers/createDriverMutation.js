import api from '../../utils/api';
import { useMutation } from 'react-query';

const createDriver = async (form) => {
  const { data } = await api.post('/drivers', form);
  return data;
}

export function useCreateDriver() {
  return useMutation('createDriver', createDriver);
}
