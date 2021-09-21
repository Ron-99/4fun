import api from '../../utils/api';
import { useQuery } from 'react-query';


export function useIsAuthQuery() {

  const isAuth = async () => {
    const { data } = await api.get( `/auth/whoami` );
    return data;
  }
  return useQuery(['isAuth'], isAuth);
}
