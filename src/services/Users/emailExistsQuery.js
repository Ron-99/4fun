import api from '../../utils/api';
import { useQuery } from 'react-query';


export function useEmailExistsQuery(email, season) {

  const emailExists = async () => {
    const { data } = await api.get( `/auth/email?email=${email}&season=${season}` );
    return data;
  }
  return useQuery(['emailExists'], emailExists, { enabled: false, refetchOnWindowFocus: false });
}
