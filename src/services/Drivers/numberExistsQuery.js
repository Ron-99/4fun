import api from '../../utils/api';
import { useQuery } from 'react-query';


export function useNumberExistsQuery(number) {
  const NumberExists = async () => {
    console.log(number)
    const { data } = await api.get( `/drivers/exists?number=${number}` );
    return data;
  }

  return useQuery(['numberExists'], NumberExists, { enabled: false, refetchOnWindowFocus: false });
}
