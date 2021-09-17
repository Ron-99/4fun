import api from '../../utils/api';
import { useQuery } from 'react-query';

const listSubscription = async () => {
  const { data } = await api.get('/subscriptions/');
  return data;
}

export function useListSubscriptionQuery() {
  return useQuery('listSubscription', listSubscription);
}
