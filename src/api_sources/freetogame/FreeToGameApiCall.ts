import axios, { AxiosResponse } from 'axios';

const BASE_URL =
  'https://us-central1-favorite-apis.cloudfunctions.net/freeToGame';

const FreeToGameApiCall = async (
  queryString: string
): Promise<AxiosResponse<any>> => {
  const response = await axios.post(BASE_URL, {
    queryString,
  });
  return response;
};

export default FreeToGameApiCall;
