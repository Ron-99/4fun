import api from '../../utils/api';
import { useQuery } from 'react-query';


export function useNumberExistsQuery(number, season) {
  const NumberExists = async () => {
    const { data } = await api.get( `/drivers/exists?number=${number}&season=${season}` );
    return data;
  }

  return useQuery(['numberExists'], NumberExists, { enabled: false, refetchOnWindowFocus: false });
}
