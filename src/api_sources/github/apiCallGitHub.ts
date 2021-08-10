import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://api.github.com/search/repositories';

const apiCallGitHub = async (
  queryString: string
): Promise<AxiosResponse<any>> => {
  const response = await axios.get(`${BASE_URL}?${queryString}`);
  return response;
};

export default apiCallGitHub;
