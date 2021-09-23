import api from '../../utils/api';
import { useQuery } from 'react-query';


export function useEmailExistsQuery(email) {

  const emailExists = async () => {
    const { data } = await api.get( `/auth/email?email=${email.toLowerCase()}` );
    return data;
  }
  return useQuery(['emailExists'], emailExists, { enabled: false, refetchOnWindowFocus: false });
}
