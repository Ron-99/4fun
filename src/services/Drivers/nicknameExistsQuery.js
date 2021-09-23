import api from "../../utils/api";
import {useQuery} from "react-query";

export function useNicknameExistsQuery(nickname) {
  const nicknameExists = async () => {
    const { data } = await api.get( `/drivers/exists?nickname=${nickname.toLowerCase()}` );
    return data;
  }

  return useQuery(['nicknameExists'], nicknameExists, { enabled: false, refetchOnWindowFocus: false });
}
