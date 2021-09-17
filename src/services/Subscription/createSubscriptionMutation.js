import api from '../../utils/api';
import { useMutation } from 'react-query';

const createSubscription = async (form) => {
  const { data } = await api.post('/subscriptions', form);
  return data;
}

export function useCreateSubscription() {
  return useMutation('createSubscription', createSubscription);
}
