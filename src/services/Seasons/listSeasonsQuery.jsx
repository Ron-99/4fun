import api from '../../utils/api';
import { useQuery } from 'react-query';

const listSeasons = async () => {
  const { data } = await api.get('/seasons/');
  return data;
}

export function useListSeasonsQuery() {
  return useQuery('listSeasons', listSeasons);
}
